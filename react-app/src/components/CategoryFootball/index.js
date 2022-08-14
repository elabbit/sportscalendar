import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FetchNFL from '../FetchNFL';




const CategoryFootball = ({ eventsList, setEventsList }) => {

    return (
        <div className='category-conatainer'>
            <Tabs>
                <TabList>
                    <Tab>NFL</Tab>
                </TabList>
                <TabPanel>
                    <div className="cat-tab-body">
                        <FetchNFL eventsList={eventsList} setEventsList={setEventsList} />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default CategoryFootball;
