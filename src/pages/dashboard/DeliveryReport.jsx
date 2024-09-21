import React, { useState } from 'react';
import './DeliveryReport.css';
import deliveries from 'utils/constants';

const DeliveryReport = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(deliveries[0]);

  const handleDeliveryClick = (delivery) => {
    setSelectedDelivery(delivery);
  };


  return (
    <div className="delivery-card">
      <div className="delivery-list">
        <h2>Ongoing Delivery</h2>
        <ul className="delivery-items">
          {deliveries.map((delivery) => (
            <li
              key={delivery.id}
              className={`delivery-item ${selectedDelivery?.id === delivery.id ? 'selected' : ''}`}
              onClick={() => handleDeliveryClick(delivery)}
            >
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                  <strong>Shipment Number:</strong> {delivery.id} <br />
                  {delivery.address} <br />
                  <strong>Status:</strong> {delivery.status} <br />
                </div>
                <img
                  style={{ width: '200px', height: '100px' }}
                  src="https://w7.pngwing.com/pngs/292/317/png-transparent-pickup-truck-computer-icons-semi-trailer-truck-dump-truck-pickup-truck-electronics-rectangle-truck-thumbnail.png"
                  alt="truck-img"
                />
              </div>{' '}
            </li>
          ))}
        </ul>
      </div>

      <div className="delivery-image">
        <>
          <h2>On the way</h2>
          <img src={selectedDelivery.image} alt={`For Order ID: ${selectedDelivery.id}`} className="delivery-image-preview" />
          <div className="details-section">
            <div className="details-row">
              <span className="label">Category</span>
              <span className="label">Distance</span>
              <span className="label">Estimation</span>
              <span className="label">Weight</span>
              <span className="label">Fee</span>
            </div>
            <div className="details-row">
              <span className="value">{selectedDelivery.category}</span>
              <span className="value">{selectedDelivery.distance}</span>
              <span className="value">{selectedDelivery.estimation}</span>
              <span className="value">{selectedDelivery.weight}</span>
              <span className="value">{selectedDelivery.fee}</span>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default DeliveryReport;
