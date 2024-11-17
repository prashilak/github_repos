import { render, screen } from "@testing-library/react"
import RepoDetails from "../RepoDetails"
import { BrowserRouter } from "react-router-dom"
import * as React from 'react';


describe('Repo details',()=>{
    it('render repo details',()=>{
        render(
        <BrowserRouter>
            <RepoDetails/>
        </BrowserRouter>
        )

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    })
})