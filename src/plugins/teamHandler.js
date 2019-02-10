export function splitTeam(team) {
  let subTeam = []
  switch (team) {
    case '1000':
      subTeam = ['SII','NII','HII','X','研究生']
      break
    case '1100':
      subTeam = ['B','E','J','研究生']
      break
    case '1200':
      subTeam = ['G','NIII','Z','研究生']
      break
    case '1300':
      subTeam = ['S','H','研究生']
      break
    case '1400':
      subTeam = ['C','K','研究生']
      break
    case '1500':
      subTeam = ['IDFT']
      break
    case '1600':
      subTeam = ['海外练习生']
      break
    case '998':
      subTeam = ['明星殿堂']
      break
    case '-1':
      subTeam = ['官方账号']
      break
    default:
      subTeam = ['全部成员']
  }
  return subTeam
}
export function transformGroupId(group) {
  switch (group.toLowerCase()) {
    case 'snh48':
      group = 1000
      break
    case 'bej48':
      group = '1100'
      break
    case 'gnz48':
      group = '1200'
      break
    case 'shy48':
      group = '1300'
      break
    case 'ckg48':
      group = '1400'
      break
    case 'idft':
      group = '1500'
      break
    case '海外练习生':
      group = '1600'
      break
    case 'other':
      group = '-1'
      break
    case 'legend':
      group = '998'
      break
    default:
      group = '1'
  }
  return group
}