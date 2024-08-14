import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './profile.css';
import { useAuth } from '../../hooks/useAuth';

const Profile = () => {
  const {
    logOut, getInfo, username, firstName, lastName, maidenName, age, gender, email, phone, birthDate, image, bloodGroup, height, weight, eyeColor, hair, address, macAddress, university, bank, company, ein, ssn, userAgent, crypto, role
  } = useAuth();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  const handleLogout = () => {
    logOut();
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img src={image} alt={`${username}'s profile`} className="profile-image" />
      <div className={`profile-details ${expanded ? 'expanded' : ''}`}>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Maiden Name:</strong> {maidenName}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Birth Date:</strong> {birthDate}</p>
        <div className="details-fade">
          <p><strong>Blood Group:</strong> {bloodGroup}</p>
          <p><strong>Height:</strong> {height}</p>
          <p><strong>Weight:</strong> {weight}</p>
          <p><strong>Eye Color:</strong> {eyeColor}</p>
          <p><strong>Hair:</strong> {hair.color}, {hair.type}</p>
          <p><strong>Address:</strong> {address.address}, {address.city}, {address.state}, {address.country}, {address.postalCode}</p>
          <p><strong>MAC Address:</strong> {macAddress}</p>
          <p><strong>University:</strong> {university}</p>
          <p><strong>Bank:</strong> {bank.cardNumber} - {bank.cardType} - {bank.currency}</p>
          <p><strong>Company:</strong> {company.name} - {company.title}</p>
          <p><strong>Company Address:</strong> {company.address.address}, {company.address.city}, {company.address.state}, {company.address.country}</p>
          <p><strong>EIN:</strong> {ein}</p>
          <p><strong>SSN:</strong> {ssn}</p>
          <p><strong>User Agent:</strong> {userAgent}</p>
          <p><strong>Crypto:</strong> {crypto.coin} - {crypto.wallet} - {crypto.network}</p>
          <p><strong>Role:</strong> {role}</p>
        </div>
      </div>
      <button className="expand-button" onClick={toggleExpand}>
        {expanded ? '▲ Show Less' : '▼ Show More'}
      </button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
