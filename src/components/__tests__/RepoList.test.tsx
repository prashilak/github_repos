import { render, screen } from "@testing-library/react";
import useFetchData from "../../services/useFetchData";
import RepoList from "../RepoList";
import * as React from 'react';

jest.mock('../../services/useFetchData');

describe('RepoList Component', () => {
    it('renders loading ', () => {
      (useFetchData as jest.Mock).mockReturnValue({
        data: null,
        isLoading: true,
        error: null,
      });

      render(<RepoList />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
})