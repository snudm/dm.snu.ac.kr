# -*- coding: utf-8 -*-

import os
USER_ID="datamining"
USER_PW="eldpa!"

CONTACT = {
    'address_ko': '서울시 관악구 관악로 1 서울대학교 39동 339호',
    'address_en': '39-339, Seoul National University, Gwanak-ro, Gwanak-gu, Seoul, South Korea (Zipcode: 151-742)',
    'email': 'datamining@snu.ac.kr',
    'phone': '+82-(0)2-880-7025',
}

#2016/11/10  교수님 지시로 datamining 탭 삭제
#2019/08/07  교수님 지시로 reports, software, patent 탭 삭제
MENUS = [
    'home',
    ('people', ['professor', 'students', 'alumni']),
    ('research', ['activities', 'journal','conference', 'insight']),
    ('projects', ['sponsors', 'FAQ']),
    'education',
    'courses',
    ('degrees',['PhD','Masters','admission']),
    'contact'
]

BABEL = {
    'default_locale': 'ko',
}

LOCALES = ['ko', 'en']

SERVER = {
    'host': '0.0.0.0',
    'port': 8088,
    'debug': True,
}

APP_URL = 'http://dm.snu.ac.kr'
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_STATIC = os.path.join(APP_ROOT, 'static')
APP_STATIC_SEMINAR = os.path.join(APP_STATIC,'seminar')
APP_TEMPLATES = os.path.join(APP_ROOT, 'templates')
