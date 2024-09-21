// Sample data for deliveries

const deliveries = [
  {
    id: '1',
    address: '123 Main St',
    status: 'In Transit',
    image: 'https://miro.medium.com/v2/resize:fit:990/0*wRCjo_mEaYMWRtTx.png',
    category: 'Electronics',
    distance: '100kms',
    estimation: '1D',
    weight: '10kgs',
    fee: '$20'
  },
  {
    id: '2',
    address: '456 Elm St -> 789 Oak St',
    status: 'Out for Delivery',
    image: 'https://felipeadanlerma.com/wp-content/uploads/2021/05/5b0a8ef2-4108-4e37-b4c4-aa78edaef9a5.jpeg?w=723',
    category: 'Furniture',
    distance: '50kms',
    estimation: '1D',
    weight: '10kgs',
    fee: '$20'
  },
  {
    id: '3',
    address: '789 Oak St -> 456 Elm St',
    status: 'Delivered',
    image: 'https://miro.medium.com/v2/resize:fit:990/0*wRCjo_mEaYMWRtTx.png',
    category: 'Clothing',
    distance: '200kms',
    estimation: '1D',
    weight: '10kgs',
    fee: '$20'
  }
];

export default deliveries;
