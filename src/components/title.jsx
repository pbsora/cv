export default function Title({ name, email, phone, address }) {
  return (
    <div className="title">
      <h1>{name == "" ? "My name" : name}</h1>
      <div className="sub-title">
        <p>📧 {email == "" ? "myemail@gmail.com" : email}</p>
        <p>📲 {phone == "" ? "myphone" : phone}</p>
        <p>📍 {address == "" ? "My location" : address}</p>
      </div>
    </div>
  );
}
