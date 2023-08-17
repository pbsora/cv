function Personal({
  handleName,
  name,
  handleEmail,
  email,
  handlePhone,
  phone,
  handleAddress,
  address,
}) {
  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <label htmlFor="name">Full name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleName}
        value={name}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleEmail}
        value={email}
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone number"
        onChange={handlePhone}
        value={phone}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Address"
        onChange={handleAddress}
        value={address}
      />
    </div>
  );
}

export default Personal;
