var app = new Vue({
  el: '#root',
  data: {
    rows : [
      {
        date: '2020-03-12',
        name: 'Hembygdsgård 2.0',
        komplett: false,
        status: 'Utkast',
        type: 'Projektstöd',
        journalnumber: '-',
        'download': true,
        'edit': true,
        'delete': true
      },
      {
        'date': '2020-03-12',
        'name': 'Hembygdsgård 3.0',
        'komplett': true,
        'status': 'Inskickad',
        'type': 'Projektstöd',
        'journalnumber': '2020-1567-1',
        'download': true,
        'edit': true,
        'delete': false
      },
      {
        'date': '2020-03-12',
        'name': 'Hembygdsgård 4.0',
        'komplett': true,
        'status': 'Ändring',
        'type': 'Projektstöd',
        'journalnumber': '1234-5678-2',
        'download': true,
        'edit': true,
        'delete': false
      }
    ],
    controls: {
      'download' : '',
      'edit' : '',
      'delete': '',
      'complete' : '',
      'notComplete' : ''
      
    }
  }
})