import { Panel, PanelItem } from '../models/CopyPanel'

import GeniusIcon from '../images/icons/icon-genius.png'
import TacticianIcon from '../images/icons/icon-tactician.png'
import EngineerIcon from '../images/icons/icon-engineer.png'
import BusinessmanIcon from '../images/icons/icon-businessman.png'

export const panelData: PanelItem = {
  genius: new Panel(
    GeniusIcon,
    'Super-Genius Intelligence',
    'Quite apart from the powers granted him by the suit, Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.'
  ),
  tactician: new Panel(
    TacticianIcon,
    'Expert Tactician',
    'He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies.'
  ),
  engineer: new Panel(
    EngineerIcon,
    'Master Engineer',
    'He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.'
  ),
  businessman: new Panel(
    BusinessmanIcon,
    'Master Businessman',
    "Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  He has built up several multi-million dollar companies from virtually nothing."
  ),
}
