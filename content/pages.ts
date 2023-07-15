import Resources from './sections/01-resources.svx'
import ChainOfCustody from './sections/02-chain-of-custody.svx'
import Hashsum from './sections/02.5-hashsum.svx'
import SMS from './sections/03-sms.svx'
import DatabaseAnalysis from './sections/04-database-analysis.svx'
import DatabaseDeletedRecords from './sections/05-database-deleted-records.svx'
import AutomatedAnalysis from './sections/06-automated-analysis.svx'
import Questions from './sections/questions.svx'

const pages = [
  ["Resources", Resources],
  ["Chain Of Custody", ChainOfCustody],
  ["Getting Started", Hashsum],
  ["SMS", SMS],
  ["Database Analysis", DatabaseAnalysis],
  ["Deleted Database Records", DatabaseDeletedRecords],
  ["Automated Analysis", AutomatedAnalysis],
  ["Questions", Questions],
] satisfies [string, any][];

export default pages