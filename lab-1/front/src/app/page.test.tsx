import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock next/image since it's not available in jsdom
vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img {...props} />;
    },
}));

describe('Home page', () => {
    it('renders the heading', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('To get started, edit the page.tsx file.');
    });

    it('renders the Next.js logo', () => {
        render(<Home />);
        const logo = screen.getByAltText('Next.js logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/next.svg');
    });

    it('renders the Deploy Now link', () => {
        render(<Home />);
        const deployLink = screen.getByRole('link', { name: /deploy now/i });
        expect(deployLink).toBeInTheDocument();
        expect(deployLink).toHaveAttribute('target', '_blank');
        expect(deployLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders the Documentation link', () => {
        render(<Home />);
        const docsLink = screen.getByRole('link', { name: /documentation/i });
        expect(docsLink).toBeInTheDocument();
        expect(docsLink).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'));
    });

    it('renders Templates and Learning links in the description', () => {
        render(<Home />);
        const templatesLink = screen.getByRole('link', { name: /templates/i });
        const learningLink = screen.getByRole('link', { name: /learning/i });
        expect(templatesLink).toBeInTheDocument();
        expect(learningLink).toBeInTheDocument();
    });

    it('renders the Vercel logomark', () => {
        render(<Home />);
        const vercelLogo = screen.getByAltText('Vercel logomark');
        expect(vercelLogo).toBeInTheDocument();
        expect(vercelLogo).toHaveAttribute('src', '/vercel.svg');
    });
});
