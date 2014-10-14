import os


MENUS = [
    'members',
    ('research', ['methods', 'publications']),
    ('projects', ['topics', 'FAQ']),
    'courses',
    'software',
    'contact',
    ('FAQ', ['datamining', 'admission'])
]

BABEL = {
    'default_locale': 'ko',
}

SERVER = {
    'host': '0.0.0.0',
    'port': 8088,
    'debug': True,
}

APP_URL = 'http://dmlab.snu.ac.kr'
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_STATIC = os.path.join(APP_ROOT, 'static')
