import React, { useCallback } from 'react';
import { HomeContainer } from './home.style';
import { connect } from 'react-redux';
import CategoryCard from '../../category-card/category-card.component';

const Home = ({ sections }) => {
  const displaySections = useCallback(() => {
    return sections.map(section => {
      return (
        <CategoryCard
          key={section.title}
          name={section.title}
          title="Shop Now"
          size={section.size}
          imageUrl={section.imageUrl}
        />
      );
    });
  }, [sections]);

  return <HomeContainer>{displaySections()}</HomeContainer>;
};

const mapStateToProps = ({ shop: { sections } }) => ({
  sections
});

export default connect(mapStateToProps, null)(Home);
