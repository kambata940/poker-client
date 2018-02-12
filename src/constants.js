// Added:
// players[id].seat
const DEFAULT_STATE = {
  pot: 90,
  aggressor_id: 0,
  current_stage: 'preflop',
  small_blind: 10,
  big_blind: 20,
  board: ['Kc', '7h', '7s'],
  current_player_id: 1,
  players: {
    0: {
     name: 'John',
     position: 'CO',
     money_in_pot: 60,
     last_move: {type: 'raise', bet: 60, player_id: 0},
     active: true,
     balance: 940,
     id: 0,
     cards: [],
     seatPosition: 'left',
     imageURL: '/images/player-john@2x.png',
   },
   1: {
     name: 'Maria',
     position: 'D',
     money_in_pot: 0,
     last_move: {},
     active: true,
     balance: 400,
     id: 1,
     cards: [],
     seatPosition: 'left-bottom',
     imageURL: '/images/player-female-student.png',
   },
   2: {
     name: 'Kamen',
     position: 'SD',
     money_in_pot: 10,
     last_move: {},
     active: true,
     balance: 890,
     id: 2,
     cards: ['Qd', '7h'],
     seatPosition: 'right',
   },
   3: {
     name:   'Fill Ivy',
     position: 'BB',
     money_in_pot: 20,
     last_move: {},
     active: true,
     balance: 480,
     id: 3,
     cards: [],
     seatPosition: 'right-top',
     imageURL: '/images/player-hidden.png'
   },
  },
}

const SEATS_POSITIONS = ['left', 'left-bottom', 'right-bottom', 'right', 'right-top', 'left-top']

const SEATS_POSITIONS_CSS_MAPPING = {
  'left':         'left',
  'left-bottom':  'leftBottom',
  'right-bottom': 'rightBottom',
  'right':        'right',
  'right-top':    'rightTop',
  'left-top':     'leftTop',
}

export {
  DEFAULT_STATE,
  SEATS_POSITIONS,
  SEATS_POSITIONS_CSS_MAPPING,
}
