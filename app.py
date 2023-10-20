#! /usr/bin/python2.7
# -*- coding: utf-8 -*-
import os
import json
import operator
from flask import abort, Flask, g, redirect, render_template, request, url_for, send_from_directory, Response
from flask.ext.babel import Babel, get_locale

from settings import APP_URL, BABEL, CONTACT, LOCALES, MENUS, SERVER, APP_STATIC_SEMINAR, APP_STATIC
from utils import get_notice, read_csv_data, read_json_data, read_txt_data, read_seminar_data, allowed_file, byteify
from flask.helpers import flash
from werkzeug import secure_filename
from datetime import datetime


app = Flask(__name__)
app.config['BABEL_DEFAULT_LOCALE'] = BABEL['default_locale']
app.config['SEMINAR_FORDER'] = APP_STATIC_SEMINAR
app.debug = SERVER['debug']
app.jinja_env.globals.update(isinstance=isinstance, str=str)

babel = Babel(app, **BABEL)


@app.before_request
def before():
    if request.view_args and 'lang_code' in request.view_args:
        g.current_lang = request.view_args['lang_code']
        request.view_args.pop('lang_code')

@app.after_request
def add_header(response):
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response


@babel.localeselector
def get_locale():
    try:
        return g.current_lang or BABEL['default_locale']
    except AttributeError:
        return BABEL['default_locale']


@app.route('/')
def root():
    return redirect(url_for('home', lang_code=BABEL['default_locale'], ))


@app.route('/<lang_code>/')
def home():
    if g.current_lang in LOCALES:
        return render_template('home.html',
                               datamining=read_json_data('datamining.json'),
                               news=read_json_data('news.json'))
    else:
        return abort(404)


@app.route('/<lang_code>/degrees/')
def degrees():
    return redirect(url_for('admission_qna', lang_code=get_locale()))


@app.route('/<lang_code>/degrees/phd')
def phd():
    return render_template('degrees_phd.html',
                           phd=read_json_data('degrees.json'))


@app.route('/<lang_code>/degrees/masters')
def masters():
    return render_template('degrees_masters.html',
                           masters=read_json_data('degrees.json'))


@app.route('/<lang_code>/degrees/admission')
def admission():
    return render_template('degrees_qna.html',
                           admission=read_json_data('degrees.json'))


# @app.route('/<lang_code>/zoon')
# def zoon():
#     return render_template('professor.html')
    # return render_template('zoon.html')


@app.route('/<lang_code>/contact')
def contact():
    return render_template('contact.html')


@app.route('/<lang_code>/courses')
def courses():
    return render_template('courses.html',
                           courses=read_json_data('courses.json'))


@app.route('/<lang_code>/courses/<id>')
def course(id):
    if '"id": "' + id + '"' in open(os.path.join(APP_STATIC, 'data', 'courses.json')).read().decode('utf-8'):
        return render_template('courses/%s.html' % id)
    else:
        return abort(404)


"""
2016/11/10 교수님 지시로 삭제
@app.route('/<lang_code>/datamining')
def datamining():
    return render_template('datamining.html',\
           datamining=read_json_data('datamining.json'))
"""


@app.route('/<lang_code>/development/')
def development():
    return redirect(url_for('faq', lang_code=get_locale()))


@app.route('/<lang_code>/development/ongoing')
def ongoing():
    return render_template('ongoing_topics.html',
                           topics=read_json_data('ongoing_topics.json'))


@app.route('/<lang_code>/development/past')
def past():
    return render_template('sponsors.html',
                           topics=read_json_data('sponsors.json'))


@app.route('/<lang_code>/startup')
def startup():
    return render_template('startup.html',
                           topics=read_json_data('startup.json'))


@app.route('/<lang_code>/education')
def education():
    return render_template('education.html',
                           educations=read_json_data('education.json'))
#    return redirect('http://dm.snu.ac.kr/~zoon/education.html')


@app.route('/<lang_code>/people')
def people():
    return redirect(url_for('students'))


@app.route('/<lang_code>/people/professor')
def professor():
    return render_template('professor.html')

# 23.10.20 update
# @app.route('/<lang_code>/people/students')
# def students():
#     headers = [u'박사 수료', u'박사 과정', u'석사 과정', u'휴학생']
#     member_keys = ['phd_candidates', 'phd_students', 'ms_students', 'on_leave']

#     return render_template('students.html', students=read_json_data('members.json'), member_header_key_pairs=zip(headers, member_keys))

@app.route('/<lang_code>/people/students')
def PhD():
    headers = [u'박사 수료']
    member_keys = ['phd_candidates', 'phd_students', 'ms_students', 'on_leave']

    return render_template('students.html', students=read_json_data('members_phd.json'), member_header_key_pairs=zip(headers, member_keys))

@app.route('/<lang_code>/people/students')
def masters():
    headers = [u'석사 과정']
    member_keys = ['phd_candidates', 'phd_students', 'ms_students', 'on_leave']

    return render_template('students.html', students=read_json_data('members_masters.json'), member_header_key_pairs=zip(headers, member_keys))

@app.route('/<lang_code>/people/students')
def onleave():
    headers = [u'휴학생']
    member_keys = ['phd_candidates', 'phd_students', 'ms_students', 'on_leave']

    return render_template('students.html', students=read_json_data('members_onleave.json'), member_header_key_pairs=zip(headers, member_keys))

@app.route('/<lang_code>/people/alumni')
def alumni():
    return render_template('alumni.html', alumni=read_json_data('alumni.json'))


@app.route('/<lang_code>/notices/')
def notices():
    return redirect(url_for('root'))


@app.route('/<lang_code>/notices/<id>')
def notice(id):
    return render_template('notice.html', notice=get_notice(id))


@app.route('/<lang_code>/development/faq')
def faq():
    print request.view_args
    return render_template('faq.html',
                           faq=read_json_data('faq.json'))


@app.route('/<lang_code>/research/')
def research():
    try:
        return redirect(url_for('publications', lang_code=get_locale()))
    except:
        return abort(404)


@app.route('/<lang_code>/research/activities', methods=['GET', 'POST'])
def activities():
    # return redirect("https://sites.google.com/a/dm.snu.ac.kr/snudm_seminar/")
    """
    if request.method =='POST':
        if 'file' not in request.files:
            flash('파일이 없습니다.')
            return redirect(request.url)
        file = request.files['file']

        if file.filename =='':
            flash('선택된 파일이 없습니다.')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filename = datetime.today().strftime('%Y%m%d')+'-'+filename
            file.save(os.path.join(app.config['SEMINAR_FORDER'],filename))
    return render_template('activities.html', seminar_data = read_seminar_data())
    """
    return render_template('activities.html',
                           activities=read_json_data('activities.json'))


@app.route('/<lang_code>/activity_form', methods=['GET', 'POST'])
def activity_form():
    return render_template('activity_form.html')


@app.route('/activity_create', methods=['GET', 'POST'])
def activity_create():
    data = request.form
    seminar = {u"date": data['date'], u"name": data['name'], u"speaker": data['speaker'], u"paper": data['paper'], u"paper_url": data['paper_url']}

    with open(os.path.join(APP_STATIC, 'data', 'activities.json'), 'r') as f:
        seminar_list = json.load(f, encoding='utf-8')
        seminar_list["activities"].insert(0, seminar)
        seminar_list["activities"].sort(key=lambda x: x['date'], reverse=True)
        seminar_list = byteify(seminar_list)
    # print seminar_list

    with open(os.path.join(APP_STATIC, 'data', 'activities.json'), 'w') as f:
        json.dump(seminar_list, f, ensure_ascii=False, encoding='utf-8', indent=2)
    return redirect(url_for('activities', lang_code=get_locale()))


@app.route('/download/<filename>')
def download(filename):
    return send_from_directory(app.config['SEMINAR_FORDER'], filename=filename)


@app.route('/<lang_code>/research/reports')
def reports():
    return render_template('reports.html',
                           reports=read_txt_data('technical_reports.txt'))


"""
@app.route('/<lang_code>/research/journalpublications')
def publications():
    return render_template('publications.html',\
            pub_accepted =read_txt_data('pub_accepted.txt'),
           pub_journals=read_txt_data('pub_journals.txt'),
           pub_conferences=read_txt_data('pub_conferences.txt'),
           pub_patent =read_txt_data('pub_patent.txt'))
"""


@app.route('/<lang_code>/research/journal')
def journal():
    return render_template('journals.html',
                           pub_journals=read_txt_data('pub_journals.txt'))


@app.route('/<lang_code>/research/conference')
def conference():
    return render_template('conference.html',
                           pub_conferences=read_txt_data('pub_conferences.txt'))


@app.route('/<lang_code>/research/patent')
def patent():
    return render_template('patents.html', pub_patent=read_txt_data('pub_patent.txt'))


@app.route('/<lang_code>/research/insight')
def insight():
    return redirect('https://snudm.github.io/fintext', code=302)


@app.route('/<lang_code>/map')
def map():
    return render_template('map.html')


@app.route('/<lang_code>/seminar')
def seminar():
    return render_template('seminar.html')


@app.route('/<lang_code>/software')
def software():
    return render_template('software.html',
                           software=read_json_data('software.json'))

@app.route('/<lang_code>/~<name>')
def member_lang(name):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    name_dir = os.path.join(base_dir, 'templates', 'home', name)
    if name == 'zoon':
        return render_template('professor.html')
    if not os.path.exists(name_dir):
        return abort(404)
    return render_template('home/%s/public_html/index.html' % name)

@app.route('/~zoon/index.html')
def naver_zoon():
    return render_template('professor.html')

@app.route('/~<name>')
def member(name):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    name_dir = os.path.join(base_dir, 'templates', 'home', name)
    if name == 'zoon' or name == 'zoon/index.html':
        return render_template('professor.html')
    elif not os.path.exists(name_dir):
        return abort(404)
    return render_template('home/%s/public_html/index.html' % name)

@app.route('/<lang_code>/opendata')
def opendata():
    return render_template('opendata.html',
                           opendata=read_json_data('opendata.json'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.context_processor
def inject_vars():
    return dict(menus=MENUS, locale=get_locale(), contact=CONTACT)


if __name__ == '__main__':
    app.run(SERVER['host'], SERVER['port'])
