import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListItem from '../ListItem';
import * as React from "react";


const mockData = [
    {
        id:1,
        name:'repo 1',
        private:false,
        description:'repo 1 description',
        language:'js',
        updated_at:'17/11/2024'
    }
]

describe('Render Repo Item List ',()=>{
    it('render empty list',()=>{

        render(
           <BrowserRouter>
               <ListItem data={[]}/>
           </BrowserRouter>
           )

        expect(screen.getByText('no repo created yet...')).toBeInTheDocument();
    })

    it('render a list of repo ',()=>{
        render(
            <BrowserRouter>
                <ListItem data={mockData}/>
            </BrowserRouter>
        )
        expect(screen.getByText('repo 1')).toBeInTheDocument();
    })
})