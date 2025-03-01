import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimeCard from './index';
import '@testing-library/jest-dom';

const mockData = {
    images: {
        webp: {
            image_url: 'https://example.com/image.jpg'
        }
    },
    title: 'Anime Title',
    type: 'TV',
    rating: 'PG-13',
    duration: '24 min per ep',
    mal_id: 1
};

test('AnimeCard matches snapshot', () => {
    const { asFragment } = render(<AnimeCard data={mockData} />);
    expect(asFragment()).toMatchSnapshot();
});

test('AnimeCard renders Title', () => {
    render(<AnimeCard data={mockData} />);
    const titleElement = screen.getByText(/Anime Title/i);
    expect(titleElement).toBeInTheDocument();
});


test('AnimeCard renders type tags', () => {
    render(<AnimeCard data={mockData} />);
    const typeElement = screen.getByText(/TV/i);
    expect(typeElement).toBeInTheDocument();
});

test('AnimeCard renders rating tag', () => {
    render(<AnimeCard data={mockData} />);
    const ratingElement = screen.getByText(/PG-13/i);
    expect(ratingElement).toBeInTheDocument();
});

test('AnimeCard renders duration tag', () => {
    render(<AnimeCard data={mockData} />);
    const durationElement = screen.getByText(/24 min per ep/i);
    expect(durationElement).toBeInTheDocument();
});

test('AnimeCard renders image with correct src', () => {
    render(<AnimeCard data={mockData} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', 'https://example.com/image.jpg');
});
