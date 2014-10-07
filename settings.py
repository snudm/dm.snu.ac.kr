import os

MENUS = [
    'members',
    'courses',
    ('FAQ', ['datamining', 'admission'])
]

SERVER = {
    'host': '0.0.0.0',
    'port': 8088,
    'debug': True,
}

APP_URL = 'http://dmlab.snu.ac.kr'
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_STATIC = os.path.join(APP_ROOT, 'static')
