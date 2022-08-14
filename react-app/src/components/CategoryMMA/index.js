import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FetchUFC from '../FetchUFC';
import "./CategoryMMA.css"


const CategoryMMA = ({eventsList, setEventsList}) => {

    return (

        <div className='category-conatainer'>
            <Tabs>
                <TabList>
                    <Tab>UFC</Tab>

                </TabList>
                <TabPanel>
                    <div className="cat-tab-body">
                    <FetchUFC eventsList={eventsList} setEventsList={setEventsList}/>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}


export default CategoryMMA;
