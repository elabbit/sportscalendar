import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FetchNBA from '../FetchNBA';




const CategoryBasketball = ({eventsList, setEventsList}) => {

    return (

        <div className='category-conatainer'>
            <Tabs>
                <TabList>
                    <Tab>NBA</Tab>

                </TabList>
                <TabPanel>
                    <div className="cat-tab-body">
                    <FetchNBA eventsList={eventsList} setEventsList={setEventsList}/>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}


export default CategoryBasketball;
