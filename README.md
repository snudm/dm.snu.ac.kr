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
    
#### GOOGLE MAP
<iframe src="//maps.google.com/?ll=37.454972%2C126.951348&amp;spn=0.001516%2C0.002784&amp;ie=UTF8&amp;z=18&amp;t=roadmap&amp;sll=37.454972%2C126.951348&amp;sspn=0.001516%2C0.002784&amp;q=37.455029%2C126.951447%20(%EC%A0%9C%EB%AA%A9%20%EC%97%86%EB%8A%94%20%EC%9C%84%EC%B9%98)&amp;output=embed" width="100%" height="400" frameborder="0" class="map_embed" scrolling="no"></iframe>
### 관리자 문서

https://sites.google.com/a/dm.snu.ac.kr/web
