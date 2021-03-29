import React, {Component} from 'react';
import './Header.scss';
import {Divider} from "antd";

class Hearder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            line: false,
            text: '',
            region:'',
            count: 0,
            prevRegion:false,
            dataRegion:[
                {
                    id:1,
                    name:'Andijon Viloyati',
                    parentId:0,
                    children:[
                        {
                            id:2,
                            name:'Oqoltin',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:3,
                            name:'Oltinko\'l',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:4,
                            name:'Andijon',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:5,
                            name:'Asaka',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:6,
                            name:'Oxunboboyev',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:7,
                            name:'Baliqchi',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:8,
                            name:'Bo\'z',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:9,
                            name:'Buloqboshi',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:10,
                            name:'Qorasuv',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:11,
                            name:'Kuyganyor',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:12,
                            name:'Qo\'g\'ontepa',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:13,
                            name:'Marhamat',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:14,
                            name:'Poytug\'',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:15,
                            name:'Paxtaobod',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:16,
                            name:'Shahrixon',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:16,
                            name:'Xonobod',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:16,
                            name:'Xo\'jaobod',
                            parentId:1,
                            children:[]
                        }
                    ]
                },
                {
                    id:17,
                    name:'Buxoro Viloyati',
                    parentId:0,
                    children:[
                        {
                            id: 18,
                            name: 'Olot',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 19,
                            name: 'Buxoro',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 20,
                            name: 'Galaosiyo',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 21,
                            name: 'Gazli',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 22,
                            name: 'G\'ijduvon',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 23,
                            name: 'Kogon',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 24,
                            name: 'Qorako\'l',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 25,
                            name: 'Qorovulbozor',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 26,
                            name: 'Romitan',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 27,
                            name: 'Shofirkon',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 28,
                            name: 'Vobkent',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 29,
                            name: 'Jondor',
                            parentId: 17,
                            children: []
                        }
                    ]
                },
                {
                    id: 30,
                    name: 'Jizzax Viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 31,
                            name: 'Aydarko\'l',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 32,
                            name: 'Balandchariq',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 33,
                            name: 'Dashtabod',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 34,
                            name: 'Do\'stlik',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 35,
                            name: 'Jizzax',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 36,
                            name: 'Gagarin',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 37,
                            name: 'G\'allaorol',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 38,
                            name: 'G\'oliblar',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 39,
                            name: 'Marjonbuloq',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 40,
                            name: 'Paxtakor',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 41,
                            name: 'Uchtepa',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 42,
                            name: 'O\'smat',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 43,
                            name: 'Yangiqishloq',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 44,
                            name: 'Zomin',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 45,
                            name: 'Zafarobod',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 46,
                            name: 'Zarbdor',
                            parentId: 30,
                            children: []
                        }
                    ]
                },
                {
                    id: 47,
                    name: 'Qoraqalpog\'iston',
                    parentId: 0,
                    children: [
                        {
                            id: 48,
                            name: 'Oqmang\'it',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 49,
                            name: 'Beruniy',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 50,
                            name: 'Bo\'ston',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 51,
                            name: 'Chimboy',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 52,
                            name: 'Qanliko\'l',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 53,
                            name: 'Qorao\'zak',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 54,
                            name: 'Kegeyli',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 55,
                            name: 'Qo\'ng\'irot',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 56,
                            name: 'Mang\'it',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 57,
                            name: 'Mo\'ynoq',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 58,
                            name: 'Nukus',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 59,
                            name: 'Shumanay',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 60,
                            name: 'Taxiatosh',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 61,
                            name: 'Taxtako\'pir',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 62,
                            name: 'To\'rtko\'l',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 63,
                            name: 'Xo\'jayli',
                            parentId: 47,
                            children: []
                        }
                    ]
                },
                {
                    id: 64,
                    name: 'Qashqadaryo viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 65,
                            name: 'Beshkent',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 66,
                            name: 'Chiroqchi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 67,
                            name: 'Dehqonobod',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 68,
                            name: 'G\'uzor',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 69,
                            name: 'Qamashi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 70,
                            name: 'Karashina',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 71,
                            name: 'Qarshi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 72,
                            name: 'Koson',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 73,
                            name: 'Kasbi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 74,
                            name: 'Kitob',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 75,
                            name: 'Muborak',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 76,
                            name: 'Mug\'lon',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 77,
                            name: 'Shahrisabz',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 78,
                            name: 'Talimarjon',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 79,
                            name: 'Yakkabog\'',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 80,
                            name: 'Mirishkor',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 81,
                            name: 'Nishon',
                            parentId: 64,
                            children: []
                        },
                    ]
                },
                {
                    id: 82,
                    name: 'Navoiy viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 83,
                            name: 'Beshrabot',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 84,
                            name: 'Konimex',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 85,
                            name: 'Karmana',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 86,
                            name: 'Qiziltepa',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 87,
                            name: 'Navoiy',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 88,
                            name: 'Nurota',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 89,
                            name: 'Tomdibuloq',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 90,
                            name: 'Uchquduq',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 91,
                            name: 'Yangirobot',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 92,
                            name: 'Zarafshon',
                            parentId: 82,
                            children: []
                        }
                    ]
                },
                {
                    id: 93,
                    name: 'Namangan viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 94,
                            name: 'Chortoq',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 95,
                            name: 'Chust',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 96,
                            name: 'Chust',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 97,
                            name: 'Jomasho\'y',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 98,
                            name: 'Kosonsoy',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 99,
                            name: 'Namangan',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 100,
                            name: 'Pop',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 101,
                            name: 'Toshbuloq',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 102,
                            name: 'To\'raqo\'rg\'on',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 103,
                            name: 'Uchqo\'rg\'on',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 104,
                            name: 'Xaqqulobod',
                            parentId: 93,
                            children: []
                        },
                    ]
                },
                {
                    id: 105,
                    name: 'Samarqand viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 106,
                            name: 'Oqtosh',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 107,
                            name: 'Bulung\'ur',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 108,
                            name: 'Chelak',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 109,
                            name: 'Darband',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 110,
                            name: 'Jomboy',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 111,
                            name: 'Juma',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 112,
                            name: 'G\'uzalbek',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 113,
                            name: 'Gulobod',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 114,
                            name: 'Ishtixon',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 115,
                            name: 'Kattaqo\'rg\'on',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 116,
                            name: 'Qo\'shrobod',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 117,
                            name: 'Loish',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 118,
                            name: 'Nurobod',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 119,
                            name: 'Payariq',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 120,
                            name: 'Payshanba',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 121,
                            name: 'Samarqand',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 122,
                            name: 'Taylov',
                            parentId: 106,
                            children: []
                        },
                        {
                            id: 123,
                            name: 'Urgut',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 124,
                            name: 'Ziadin',
                            parentId: 105,
                            children: []
                        }
                    ]
                },
                {
                    id: 125,
                    name: 'Surxandaryo viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 126,
                            name: 'Angor',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 127,
                            name: 'Boysun',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 128,
                            name: 'Bandixon',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 129,
                            name: 'Denov',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 130,
                            name: 'Jarqo\'rg\'on',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 131,
                            name: 'Qorlik',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 132,
                            name: 'Qiziriq',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 133,
                            name: 'Qumqo\'rg\'on',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 134,
                            name: 'Muzrobod',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 135,
                            name: 'Sariosiyo',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 136,
                            name: 'Sariq',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 137,
                            name: 'Sharg\'un',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 138,
                            name: 'Sherobod',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 139,
                            name: 'Sho\'rchi',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 140,
                            name: 'Termiz',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 141,
                            name: 'Uchqizil',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 142,
                            name: 'Uzun',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 143,
                            name: 'Xalqobod',
                            parentId: 125,
                            children: []
                        }
                    ]
                },
                {
                    id: 144,
                    name: 'Sirdaryo viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 145,
                            name: 'Baxt',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 146,
                            name: 'Boyovud',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 147,
                            name: 'Sirdaryo',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 148,
                            name: 'Guliston',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 149,
                            name: 'Navro\'z',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 150,
                            name: 'Sayxun',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 151,
                            name: 'Sardoba',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 152,
                            name: 'Shirin',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 153,
                            name: 'Sirdaryo',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 154,
                            name: 'Terenozak',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 155,
                            name: 'Xovos',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 156,
                            name: 'Yangiyer',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 157,
                            name: 'Yangiyer',
                            parentId: 144,
                            children: []
                        }
                    ]
                },
                {
                    id: 158,
                    name: 'Toshkent viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 159,
                            name: 'Oqqo\'rg\'on',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 160,
                            name: 'Olmaliq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 161,
                            name: 'Angren',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 162,
                            name: 'Ohangaron',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 163,
                            name: 'Bekobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 164,
                            name: 'Katta Chimyon',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 165,
                            name: 'Bo\'ka',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 166,
                            name: 'Chorvoq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 167,
                            name: 'Chinoz',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 168,
                            name: 'Chirchiq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 169,
                            name: 'So\'qoq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 170,
                            name: 'Durmen',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 171,
                            name: 'Do\'stobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 172,
                            name: 'Eshonguzar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 173,
                            name: 'G\'azalkent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 174,
                            name: 'Gulbahor',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 175,
                            name: 'Iskandar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 176,
                            name: 'Qorasuv',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 177,
                            name: 'Keles',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 178,
                            name: 'Qibray',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 179,
                            name: 'Ko\'ksaroy',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 180,
                            name: 'Krasnogorsk',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 181,
                            name: 'Mirobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 182,
                            name: 'Nazarbek',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 183,
                            name: 'To\'ytepa',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 184,
                            name: 'Parkent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 185,
                            name: 'Pskent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 186,
                            name: 'Salar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 187,
                            name: 'Toshkent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 188,
                            name: 'Tashmore',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 189,
                            name: 'Turkiston',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 190,
                            name: 'O\'rtaovul',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 191,
                            name: 'Xo\'jakent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 192,
                            name: 'Yangiobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 193,
                            name: 'Yangibozor',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 194,
                            name: 'Yangiyo\'l',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 195,
                            name: 'Zafar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 196,
                            name: 'Zangiota',
                            parentId: 158,
                            children: []
                        }
                    ]
                },
                {
                    id: 197,
                    name: 'Farg\'ona viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 198,
                            name: 'Oltiariq',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 199,
                            name: 'Bog\'dod',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 200,
                            name: 'Beshariq',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 201,
                            name: 'Dang\'ara',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 202,
                            name: 'Farg\'ona',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 203,
                            name: 'Qo\'qon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 204,
                            name: 'Quva',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 205,
                            name: 'Quvasoy',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 206,
                            name: 'Langar',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 207,
                            name: 'Marg\'ilon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 208,
                            name: 'Navbahor',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 209,
                            name: 'Ravon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 210,
                            name: 'Rishton',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 211,
                            name: 'Shohimardon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 212,
                            name: 'Toshloq',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 213,
                            name: 'Uchko\'prik',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 214,
                            name: 'Vodil',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 215,
                            name: 'Hamza',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 216,
                            name: 'Yaypan',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 217,
                            name: 'Yangi Marg\'ilon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 218,
                            name: 'Yangiqo\'rg\'on',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 219,
                            name: 'Yozyovon',
                            parentId: 197,
                            children: []
                        }
                    ]
                },
                {
                    id: 220,
                    name: 'Xorazm viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 221,
                            name: 'Bog\'ot',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 222,
                            name: 'Cholish',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 223,
                            name: 'Gurlan',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 224,
                            name: 'Qorovul',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 225,
                            name: 'Qo\'shko\'pir',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 226,
                            name: 'Pitnak',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 227,
                            name: 'Shovot',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 228,
                            name: 'Urganch',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 229,
                            name: 'Xonqa',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 230,
                            name: 'Xozarasp',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 231,
                            name: 'Xiva',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 232,
                            name: 'Yangiariq',
                            parentId: 220,
                            children: []
                        }
                    ]
                }
            ],
            dataRegionPrev:[
                {
                    id:1,
                    name:'Andijon Viloyati',
                    parentId:0,
                    children:[
                        {
                            id:2,
                            name:'Oqoltin',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:3,
                            name:'Oltinko\'l',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:4,
                            name:'Andijon',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:5,
                            name:'Asaka',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:6,
                            name:'Oxunboboyev',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:7,
                            name:'Baliqchi',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:8,
                            name:'Bo\'z',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:9,
                            name:'Buloqboshi',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:10,
                            name:'Qorasuv',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:11,
                            name:'Kuyganyor',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:12,
                            name:'Qo\'g\'ontepa',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:13,
                            name:'Marhamat',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:14,
                            name:'Poytug\'',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:15,
                            name:'Paxtaobod',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:16,
                            name:'Shahrixon',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:16,
                            name:'Xonobod',
                            parentId:1,
                            children:[]
                        },
                        {
                            id:16,
                            name:'Xo\'jaobod',
                            parentId:1,
                            children:[]
                        }
                    ]
                },
                {
                    id:17,
                    name:'Buxoro Viloyati',
                    parentId:0,
                    children:[
                        {
                            id: 18,
                            name: 'Olot',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 19,
                            name: 'Buxoro',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 20,
                            name: 'Galaosiyo',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 21,
                            name: 'Gazli',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 22,
                            name: 'G\'ijduvon',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 23,
                            name: 'Kogon',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 24,
                            name: 'Qorako\'l',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 25,
                            name: 'Qorovulbozor',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 26,
                            name: 'Romitan',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 27,
                            name: 'Shofirkon',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 28,
                            name: 'Vobkent',
                            parentId: 17,
                            children: []
                        },
                        {
                            id: 29,
                            name: 'Jondor',
                            parentId: 17,
                            children: []
                        }
                    ]
                },
                {
                    id: 30,
                    name: 'Jizzax Viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 31,
                            name: 'Aydarko\'l',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 32,
                            name: 'Balandchariq',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 33,
                            name: 'Dashtabod',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 34,
                            name: 'Do\'stlik',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 35,
                            name: 'Jizzax',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 36,
                            name: 'Gagarin',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 37,
                            name: 'G\'allaorol',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 38,
                            name: 'G\'oliblar',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 39,
                            name: 'Marjonbuloq',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 40,
                            name: 'Paxtakor',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 41,
                            name: 'Uchtepa',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 42,
                            name: 'O\'smat',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 43,
                            name: 'Yangiqishloq',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 44,
                            name: 'Zomin',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 45,
                            name: 'Zafarobod',
                            parentId: 30,
                            children: []
                        },
                        {
                            id: 46,
                            name: 'Zarbdor',
                            parentId: 30,
                            children: []
                        }
                    ]
                },
                {
                    id: 47,
                    name: 'Qoraqalpog\'iston',
                    parentId: 0,
                    children: [
                        {
                            id: 48,
                            name: 'Oqmang\'it',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 49,
                            name: 'Beruniy',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 50,
                            name: 'Bo\'ston',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 51,
                            name: 'Chimboy',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 52,
                            name: 'Qanliko\'l',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 53,
                            name: 'Qorao\'zak',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 54,
                            name: 'Kegeyli',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 55,
                            name: 'Qo\'ng\'irot',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 56,
                            name: 'Mang\'it',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 57,
                            name: 'Mo\'ynoq',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 58,
                            name: 'Nukus',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 59,
                            name: 'Shumanay',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 60,
                            name: 'Taxiatosh',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 61,
                            name: 'Taxtako\'pir',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 62,
                            name: 'To\'rtko\'l',
                            parentId: 47,
                            children: []
                        },
                        {
                            id: 63,
                            name: 'Xo\'jayli',
                            parentId: 47,
                            children: []
                        }
                    ]
                },
                {
                    id: 64,
                    name: 'Qashqadaryo viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 65,
                            name: 'Beshkent',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 66,
                            name: 'Chiroqchi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 67,
                            name: 'Dehqonobod',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 68,
                            name: 'G\'uzor',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 69,
                            name: 'Qamashi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 70,
                            name: 'Karashina',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 71,
                            name: 'Qarshi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 72,
                            name: 'Koson',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 73,
                            name: 'Kasbi',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 74,
                            name: 'Kitob',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 75,
                            name: 'Muborak',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 76,
                            name: 'Mug\'lon',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 77,
                            name: 'Shahrisabz',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 78,
                            name: 'Talimarjon',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 79,
                            name: 'Yakkabog\'',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 80,
                            name: 'Mirishkor',
                            parentId: 64,
                            children: []
                        },
                        {
                            id: 81,
                            name: 'Nishon',
                            parentId: 64,
                            children: []
                        },
                    ]
                },
                {
                    id: 82,
                    name: 'Navoiy viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 83,
                            name: 'Beshrabot',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 84,
                            name: 'Konimex',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 85,
                            name: 'Karmana',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 86,
                            name: 'Qiziltepa',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 87,
                            name: 'Navoiy',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 88,
                            name: 'Nurota',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 89,
                            name: 'Tomdibuloq',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 90,
                            name: 'Uchquduq',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 91,
                            name: 'Yangirobot',
                            parentId: 82,
                            children: []
                        },
                        {
                            id: 92,
                            name: 'Zarafshon',
                            parentId: 82,
                            children: []
                        }
                    ]
                },
                {
                    id: 93,
                    name: 'Namangan viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 94,
                            name: 'Chortoq',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 95,
                            name: 'Chust',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 96,
                            name: 'Chust',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 97,
                            name: 'Jomasho\'y',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 98,
                            name: 'Kosonsoy',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 99,
                            name: 'Namangan',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 100,
                            name: 'Pop',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 101,
                            name: 'Toshbuloq',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 102,
                            name: 'To\'raqo\'rg\'on',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 103,
                            name: 'Uchqo\'rg\'on',
                            parentId: 93,
                            children: []
                        },
                        {
                            id: 104,
                            name: 'Xaqqulobod',
                            parentId: 93,
                            children: []
                        },
                    ]
                },
                {
                    id: 105,
                    name: 'Samarqand viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 106,
                            name: 'Oqtosh',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 107,
                            name: 'Bulung\'ur',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 108,
                            name: 'Chelak',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 109,
                            name: 'Darband',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 110,
                            name: 'Jomboy',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 111,
                            name: 'Juma',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 112,
                            name: 'G\'uzalbek',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 113,
                            name: 'Gulobod',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 114,
                            name: 'Ishtixon',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 115,
                            name: 'Kattaqo\'rg\'on',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 116,
                            name: 'Qo\'shrobod',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 117,
                            name: 'Loish',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 118,
                            name: 'Nurobod',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 119,
                            name: 'Payariq',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 120,
                            name: 'Payshanba',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 121,
                            name: 'Samarqand',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 122,
                            name: 'Taylov',
                            parentId: 106,
                            children: []
                        },
                        {
                            id: 123,
                            name: 'Urgut',
                            parentId: 105,
                            children: []
                        },
                        {
                            id: 124,
                            name: 'Ziadin',
                            parentId: 105,
                            children: []
                        }
                    ]
                },
                {
                    id: 125,
                    name: 'Surxandaryo viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 126,
                            name: 'Angor',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 127,
                            name: 'Boysun',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 128,
                            name: 'Bandixon',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 129,
                            name: 'Denov',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 130,
                            name: 'Jarqo\'rg\'on',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 131,
                            name: 'Qorlik',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 132,
                            name: 'Qiziriq',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 133,
                            name: 'Qumqo\'rg\'on',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 134,
                            name: 'Muzrobod',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 135,
                            name: 'Sariosiyo',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 136,
                            name: 'Sariq',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 137,
                            name: 'Sharg\'un',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 138,
                            name: 'Sherobod',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 139,
                            name: 'Sho\'rchi',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 140,
                            name: 'Termiz',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 141,
                            name: 'Uchqizil',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 142,
                            name: 'Uzun',
                            parentId: 125,
                            children: []
                        },
                        {
                            id: 143,
                            name: 'Xalqobod',
                            parentId: 125,
                            children: []
                        }
                    ]
                },
                {
                    id: 144,
                    name: 'Sirdaryo viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 145,
                            name: 'Baxt',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 146,
                            name: 'Boyovud',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 147,
                            name: 'Sirdaryo',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 148,
                            name: 'Guliston',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 149,
                            name: 'Navro\'z',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 150,
                            name: 'Sayxun',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 151,
                            name: 'Sardoba',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 152,
                            name: 'Shirin',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 153,
                            name: 'Sirdaryo',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 154,
                            name: 'Terenozak',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 155,
                            name: 'Xovos',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 156,
                            name: 'Yangiyer',
                            parentId: 144,
                            children: []
                        },
                        {
                            id: 157,
                            name: 'Yangiyer',
                            parentId: 144,
                            children: []
                        }
                    ]
                },
                {
                    id: 158,
                    name: 'Toshkent viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 159,
                            name: 'Oqqo\'rg\'on',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 160,
                            name: 'Olmaliq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 161,
                            name: 'Angren',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 162,
                            name: 'Ohangaron',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 163,
                            name: 'Bekobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 164,
                            name: 'Katta Chimyon',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 165,
                            name: 'Bo\'ka',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 166,
                            name: 'Chorvoq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 167,
                            name: 'Chinoz',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 168,
                            name: 'Chirchiq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 169,
                            name: 'So\'qoq',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 170,
                            name: 'Durmen',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 171,
                            name: 'Do\'stobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 172,
                            name: 'Eshonguzar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 173,
                            name: 'G\'azalkent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 174,
                            name: 'Gulbahor',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 175,
                            name: 'Iskandar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 176,
                            name: 'Qorasuv',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 177,
                            name: 'Keles',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 178,
                            name: 'Qibray',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 179,
                            name: 'Ko\'ksaroy',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 180,
                            name: 'Krasnogorsk',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 181,
                            name: 'Mirobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 182,
                            name: 'Nazarbek',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 183,
                            name: 'To\'ytepa',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 184,
                            name: 'Parkent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 185,
                            name: 'Pskent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 186,
                            name: 'Salar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 187,
                            name: 'Toshkent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 188,
                            name: 'Tashmore',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 189,
                            name: 'Turkiston',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 190,
                            name: 'O\'rtaovul',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 191,
                            name: 'Xo\'jakent',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 192,
                            name: 'Yangiobod',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 193,
                            name: 'Yangibozor',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 194,
                            name: 'Yangiyo\'l',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 195,
                            name: 'Zafar',
                            parentId: 158,
                            children: []
                        },
                        {
                            id: 196,
                            name: 'Zangiota',
                            parentId: 158,
                            children: []
                        }
                    ]
                },
                {
                    id: 197,
                    name: 'Farg\'ona viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 198,
                            name: 'Oltiariq',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 199,
                            name: 'Bog\'dod',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 200,
                            name: 'Beshariq',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 201,
                            name: 'Dang\'ara',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 202,
                            name: 'Farg\'ona',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 203,
                            name: 'Qo\'qon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 204,
                            name: 'Quva',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 205,
                            name: 'Quvasoy',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 206,
                            name: 'Langar',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 207,
                            name: 'Marg\'ilon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 208,
                            name: 'Navbahor',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 209,
                            name: 'Ravon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 210,
                            name: 'Rishton',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 211,
                            name: 'Shohimardon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 212,
                            name: 'Toshloq',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 213,
                            name: 'Uchko\'prik',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 214,
                            name: 'Vodil',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 215,
                            name: 'Hamza',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 216,
                            name: 'Yaypan',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 217,
                            name: 'Yangi Marg\'ilon',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 218,
                            name: 'Yangiqo\'rg\'on',
                            parentId: 197,
                            children: []
                        },
                        {
                            id: 219,
                            name: 'Yozyovon',
                            parentId: 197,
                            children: []
                        }
                    ]
                },
                {
                    id: 220,
                    name: 'Xorazm viloyati',
                    parentId: 0,
                    children: [
                        {
                            id: 221,
                            name: 'Bog\'ot',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 222,
                            name: 'Cholish',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 223,
                            name: 'Gurlan',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 224,
                            name: 'Qorovul',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 225,
                            name: 'Qo\'shko\'pir',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 226,
                            name: 'Pitnak',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 227,
                            name: 'Shovot',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 228,
                            name: 'Urganch',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 229,
                            name: 'Xonqa',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 230,
                            name: 'Xozarasp',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 231,
                            name: 'Xiva',
                            parentId: 220,
                            children: []
                        },
                        {
                            id: 232,
                            name: 'Yangiariq',
                            parentId: 220,
                            children: []
                        }
                    ]
                }
            ],
            provinceId:0,
            regionName:'',
            displayNone:false,
            is_visible: true,
            scrollTop:0
        }
    }


    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }



    toggleVisibility() {

        if(window.pageYOffset > this.state.scrollTop){
            this.setState({
                is_visible: false
            });
        }else{
            this.setState({
                is_visible: true
            });
        }

        this.setState({scrollTop:window.pageYOffset})
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    inputChange = (value, name) => {

        this.setState({text: value})

        if (this.state.text === '') {
            this.setState({line: false})
        }
        if (this.state.text !== '') {
            this.setState({line: true})
        }
    }

    inputClear = () => {
        this.setState({text: '', line: false})
    }

    selectFunc = () => {
        console.log("selectFunc");
        this.setState({displayNone:true})
    }

    inputClearRegion =()=>{
        this.setState({region:''})
    }


    regionId = id => {
        console.log(id);
        this.state.dataRegion.map((item, index) => {
            if (item.id === id){
                this.setState({dataRegion: item.children, prevRegion: true, provinceId:id, regionName: item.name})
            }
        })
    }
    test = (id, name) => {
        console.log(id , " = ", name);
        this.setState({region:this.state.regionName + " " + name, displayNone: false})
    }
    prevStateRegion = () => {
        console.log("prevStateRegion");
        this.setState({dataRegion:this.state.dataRegionPrev, prevRegion: false})
    }

    provinceIdState = (id, name) => {
        this.setState({provinceId:id,region:name, displayNone: false})
    }


    render() {
        const {inputChange, inputClear, selectFunc, inputClearRegion, regionId, test, prevStateRegion, provinceIdState} = this;
        const {dataRegion, prevRegion, provinceId, regionName, displayNone, is_visible} = this.state;

        return (
            <nav>
                <div className={`${is_visible?'nav-container nav-disable-block':'nav-container nav-disable'}`}>
                    <div className="wrapper cl">
                        <div className="logo-block">
                            <h1>
                                <a href="#" className="olx-website-rebranded">
                                    <span className="olx-website-rebranded-o"></span>
                                    <span className="olx-website-rebranded-l"></span>
                                    <span className="olx-website-rebranded-x"></span>
                                </a>
                            </h1>
                        </div>
                        <div className="menu-block">
                            <div className="lang-selector mr-5">
                                <ul>
                                    <li className="mr-1 activeLink">O'z</li>
                                    <li className="inlblk">Ру</li>
                                </ul>
                            </div>
                            <ul>
                                <li className="mr-5">
                                    <a href="#">
                                        <b className="icon icon-like-header"/>
                                    </a>
                                </li>
                                <li className="custom-dropdown">
                                    <a href="#" className="custom-dropdown-a">
                                        <b className="icon icon-user-header mr-3"/>
                                        <span>
                                            <strong>Mening profilim</strong>
                                        </span>
                                        <b className="icon icon-chevron-down ml-1"/>
                                    </a>
                                    <div className="custom-dropdown-menu">
                                        <div className="custom-drop-item-first">
                                            <div className="custom-img">
                                                <img src={require("../../assets/images/avatarimg.svg")} alt=""/>
                                                <div className="phone ml-2">
                                                    <div className="number">998993631856</div>
                                                    <div className="id">id: 21341621</div>
                                                </div>
                                            </div>
                                            <div className="myProfil">
                                                Mening profilim
                                            </div>
                                        </div>
                                        <a href="#" className="custom-drop-item">E'lomlar</a>
                                        <a href="#" className="custom-drop-item">Xabarlar</a>
                                        <a href="#" className="custom-drop-item">To'lovlar va OLX hisobi</a>
                                        <a href="#" className="custom-drop-item">Sozlamalar</a>
                                        <div className="custom-drop-item-b">Saralanganlar:</div>
                                        <a href="#" className="custom-drop-item">E'lonlar <span
                                            className="span">0</span></a>
                                        <a href="#" className="custom-drop-item">Qidirishlar <span
                                            className="span">0</span></a>
                                        <Divider className="p-0 m-0 my-2"/>
                                        <a href="#" className="custom-drop-item">Chiqish</a>
                                    </div>
                                </li>
                            </ul>

                            <a href="#" className="postNewLink ml-5">
                                <span>E'lon berish</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" py-5 bg-search">
                    <div className="wrapper">
                        <div className="search region-dropdown">
                            <div className="input-container">
                                <b className="icon icon-search"/>
                                <input type="text"
                                       name="search"
                                       className="input-style"
                                       placeholder="987 789 e'lonlar yoningizda"
                                       value={this.state.text}
                                       onChange={(e) => inputChange(e.target.value, e.target.name)}
                                />
                                <b className={`${this.state.line ? 'icon icon-cancel' : 'margin-r'}`}
                                   onClick={inputClear}/>
                            </div>
                            <div className="location d-flex">
                                <b className="icon icon-maps"/>
                                <input type="text"
                                       onFocus={selectFunc}
                                       className="input-style"
                                       value={this.state.region}
                                       onChange={() => {console.log("change")}}
                                       onClick={() => {console.log("click")}}
                                       disabled={displayNone}
                                       placeholder={`${displayNone?'':'Butun Uzbekiston'}`}
                                />
                                <b className={`${this.state.region.length > 0 ? 'icon icon-cancel' : 'margin-r'}`}
                                   onClick={inputClearRegion}/>
                            </div>
                            <div className="search-btn">
                                <div className="mr-2">Qidiruv</div>
                                <b className="icon icon-search"/>
                            </div>
                            <div className={`${displayNone?'region-dropdown-menu d-block':'region-dropdown-menu d-none'}`}>
                                <div className="regionSearchTitle">
                                    {prevRegion ? <div className="mb-4"><div className="prevRegion float-left " onClick={prevStateRegion}><b className="icon icon-chevron-left"/>  Viloyatni o'zgartirish</div><div className="float-right prevRegion iconRight" onClick={()=>provinceIdState(provinceId, regionName)}>Butun tuman buyicha <b className="icon icon-right-arrow"/></div></div> : <div className="prevRegion">Butun Uzbekiston</div>}
                                </div>
                                <div className="regionSearchBox full">

                                    <ul className="column part25">
                                        {
                                            dataRegion.map((item, index)=>{
                                                if (index < Math.ceil(dataRegion.length/4)){
                                                    return <li key={index} className="letter" onClick={item.parentId === 0 ?()=>regionId(item.id) : ()=>test(item.id, item.name)}><a href="#"><span>{item.name}</span> <b className={`${item.parentId === 0 ? 'icon icon-chevron-right float-right':''}`}/></a></li>;
                                                }
                                            })
                                        }
                                    </ul>
                                    <ul className="column part25">
                                        {
                                            dataRegion.map((item, index)=>{
                                                if (Math.ceil(dataRegion.length/4) <= index && index < 2*Math.ceil(dataRegion.length/4)){
                                                    return <li key={index} className="letter" onClick={item.parentId === 0 ?()=>regionId(item.id) : ()=>test(item.id, item.name)}><a href="#"><span>{item.name}</span> <b className={`${item.parentId === 0 ? 'icon icon-chevron-right float-right':''}`}/></a></li>;
                                                }
                                            })
                                        }
                                    </ul>
                                    <ul className="column part25">
                                        {
                                            dataRegion.map((item, index)=>{
                                                if (2*Math.ceil(dataRegion.length/4) <= index && index < 3*Math.ceil(dataRegion.length/4)){
                                                    return <li key={index} className="letter" onClick={item.parentId === 0 ?()=>regionId(item.id) : ()=>test(item.id, item.name)}><a href="#"><span>{item.name}</span> <b className={`${item.parentId === 0 ? 'icon icon-chevron-right float-right':''}`}/></a></li>;
                                                }
                                            })
                                        }
                                    </ul>
                                    <ul className="column part25">
                                        {
                                            dataRegion.map((item, index)=>{
                                                if (3*Math.ceil(dataRegion.length/4) <= index && index < dataRegion.length){
                                                    return <li key={index} className="letter" onClick={item.parentId === 0 ?()=>regionId(item.id) : ()=>test(item.id, item.name)}><a href="#"><span>{item.name}</span> <b className={`${item.parentId === 0 ? 'icon icon-chevron-right float-right':''}`}/></a></li>;
                                                }
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
        );
    }
}

export default Hearder;