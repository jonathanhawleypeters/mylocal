import { renderComponent, expect } from '../test_helper';
import Hero from '../../src/client/components/Hero';

describe('Hero', () => {
  const hero = renderComponent(Hero);
  it('Has navigation', () => {
    expect(hero).to.contain('We Find');
    expect(hero).to.contain('You Choose');
  });
  it('Has it\'s css styles', () => {
    expect(hero.find('.main-bg-text')).to.exist;
    expect(hero.find('.main-bg-text-hero')).to.exist;
    expect(hero.find('.main-bg-text-hero-blue')).to.exist;
    expect(hero.find('.divider')).to.exist;
  });
  it('Correctly renders SearchLanding', () => {
    expect(hero.find('.inputBox')).to.exist;
    expect(hero.find('.typeSelect')).to.exist;
  });
});

