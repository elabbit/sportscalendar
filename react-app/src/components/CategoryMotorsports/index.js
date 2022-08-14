import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FetchFormulaOne from '../FetchFormulaOne';
import FetchNascar from '../FetchNascar';
import "./CategoryMotorsports.css"


const CategoryMotorsports = ({eventsList, setEventsList}) => {

    return (

        <div className='category-conatainer'>
            <Tabs>
                <TabList>
                    <Tab>Formula 1</Tab>
                    <Tab>Nascar</Tab>
                </TabList>
                <TabPanel>
                    <div className="cat-tab-body">
                    <FetchFormulaOne eventsList={eventsList} setEventsList={setEventsList}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="cat-tab-body">
                    <FetchNascar eventsList={eventsList} setEventsList={setEventsList}/>
                        </div>
                </TabPanel>

            </Tabs>
        </div>

    )

}


export default CategoryMotorsports;
