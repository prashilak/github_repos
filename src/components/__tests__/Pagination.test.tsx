import { render, screen } from '@testing-library/react';
import * as React from "react";
import Pagination from '../Pagination';



describe('Pagination Component',()=>{

    it('Render Pagination Component',()=>{
        render(<Pagination currentPage={1}
            totalPages={1}
            handlePageChange={()=>{}}/>)
    })

    expect(screen.getByText('')).toBeInTheDocument();
})


