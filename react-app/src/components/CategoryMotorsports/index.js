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
                    <div className="cat-tab-body">
                    <FetchFormulaOne eventsList={eventsList} setEventsList={setEventsList}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="cat-tab-body">
                        Nascar Component
                        </div>
                </TabPanel>
                <TabPanel>
                <div className="cat-tab-body">
                    Indycar Component
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    )

}


export default CategoryMotorsports;
