import React from 'react';

import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import Budjet from './components/Budjet';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budjet />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
