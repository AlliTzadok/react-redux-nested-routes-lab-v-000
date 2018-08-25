import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PetsList = ({ pets }) => {
  const renderPets = pets.map(pet =>
    <Link style={{ marginRight: '12px' }} key={pet.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
  );

  return (
    <div>
      {renderPets}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pets: state.pets
  };
};

export default connect(mapStateToProps)(PetsList);
