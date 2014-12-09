# SNU Data Mining Center webpage

### Why Flask?

- templating
- i18n
- RWD (responsive web design)

### Dependencies

    $ make install

### Run

    python app.py

### Configuration

#### Update i18n

    $ make extract_i18n
    $ # update *.po files
    $ make update_i18n

#### Add a popup

Add the script below to the corresponding page:

    <script type="text/javascript" src="{{ url_for('static', filename='js/snudm-notice.js') }}"></script>

#### Create a notice

1. Create a file in `/templates/notices`. The file should be named: `[id]-[title].md`
2. If `id` is a 6 digit number, it will be recognized as the document creation date and shown on the notice page.
3. The notice page will be found at `http://[your_host]/ko/notices/[id]` (ex: http://localhost:8088/ko/notices/20141206)
4. Notices currently do not distinguish locales; `http://[your_host]/ko/notices/[id]`, `http://[your_host]/en/notices/[id]` will have the same contents.
    
### 관리자 문서

https://sites.google.com/a/dm.snu.ac.kr/web
