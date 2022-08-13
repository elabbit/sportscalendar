import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FetchFormulaOne from '../FetchFormulaOne';
import "./CategoryMotorsports.css"


const CategoryMotorsports = ({eventsList, setEventsList}) => {

    return (

        <div className='category-conatainer'>
            <Tabs>
                <TabList>
                    <Tab>Formula 1</Tab>
                    <Tab>Nascar</Tab>
                    <Tab>IndyCar</Tab>
                </TabList>
                <TabPanel>
                    <FetchFormulaOne eventsList={eventsList} setEventsList={setEventsList}/>
                </TabPanel>
                <TabPanel>
                    <div>Nascar Component</div>
                </TabPanel>
                <TabPanel>
                <div>Indycar Component</div>
                </TabPanel>
            </Tabs>
        </div>

    )

}


export default CategoryMotorsports;
