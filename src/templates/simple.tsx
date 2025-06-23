import './simple.css'

export const Simple = () => {
  return (
    <div className="simple-wrapper">
        <div className="inner-wrapper">
            <ul className="list">
                <li className="list-item">Simple</li>
                <li className="list-item">Easy</li>
                <li className="list-item">Stress Free</li>
            </ul>
            <p className="description">
                With V, you take charge of your banking. No confusing charges, no paperwork and everything happens on your phone.
            </p>
               <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', alignItems: 'flex-end', marginTop:'1rem' }}>
            <img src="/app-store.png" alt="app store" style={{width: '100px', objectFit: 'contain'}} />
            <img src="/google-play.png" alt="google play" style={{width: '100px', objectFit: 'contain'}} />
            </div>
        </div>
        <img src="/simple.jpg" alt="simple" className="simple-image" />
        <img src="/recurring.png" alt="recurring" className="recurring-image" />
    </div>
)
}

