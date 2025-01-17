const AppCardBullets = ({date, bullets}) => (
    <div>
      <hr></hr>
      <h5>{date}</h5>
      <ul>
        {bullets.map ( bullet => (<li key={bullet.key}><strong>{bullet.type}</strong> {bullet.title}</li>))}
      </ul>
      <hr/>
    </div>
)

export default AppCardBullets