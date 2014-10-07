#! /usr/bin/python2.7
# -*- coding: utf-8 -*-

from flask import Flask, redirect, render_template, url_for

from settings import APP_URL, MENUS, SERVER
from utils import read_csv_data, read_json_data, read_txt_data

app = Flask(__name__)
app.debug = SERVER['debug']
app.jinja_env.globals.update(isinstance=isinstance, str=str)

@app.route('/')
def home():
    return render_template('home.html', menus=MENUS)

@app.route('/contact')
def contact():
    return render_template('contact.html', menus=MENUS)

@app.route('/courses')
def courses():
    return render_template('courses.html', menus=MENUS,
           courses=read_json_data('courses.json'))

@app.route('/faq/')
def dummy_faq():
    return redirect(url_for('datamining'))

@app.route('/faq/datamining')
def datamining():
    return render_template('datamining.html',\
           menus=MENUS,
           datamining=read_json_data('datamining.json'))

@app.route('/faq/admission')
def admission():
    return render_template('admission.html',\
           menus=MENUS,
           admission=read_json_data('admission.json'))

@app.route('/members')
def members():
    return render_template('members.html',\
           menus=MENUS,
           members=read_json_data('members.json'),
           alumni_phd=read_csv_data('alumni_phd.csv'),
           alumni_ms=read_csv_data('alumni_ms.tsv', sep='\t'))

@app.route('/projects/')
def projects():
    return redirect(url_for('faq'))

@app.route('/projects/topics')
def topics():
    return render_template('topics.html',\
           menus=MENUS,
           topics=read_json_data('topics.json'))

@app.route('/projects/faq')
def faq():
    return render_template('faq.html',\
           menus=MENUS,
           faq=read_json_data('faq.json'))

@app.route('/research/')
def research():
    return redirect(url_for('publications'))

@app.route('/research/methods')
def methods():
    return render_template('methods.html',\
           menus=MENUS)

@app.route('/research/publications')
def publications():
    return render_template('publications.html',\
           menus=MENUS,
           pub_dom_conferences=read_txt_data('pub_dom_conferences.txt'),
           pub_dom_journals=read_txt_data('pub_dom_journals.txt'),
           pub_int_conferences=read_txt_data('pub_int_conferences.txt'),
           pub_int_journals=read_txt_data('pub_int_journals.txt'))

@app.route('/software')
def software():
    return render_template('software.html',\
           menus=MENUS,
           software=read_json_data('software.json'))

@app.route('/~<name>')
def member(name):
    return redirect('%s/~%s' % (APP_URL, name))

if __name__=='__main__':
    app.run(SERVER['host'], SERVER['port'])
