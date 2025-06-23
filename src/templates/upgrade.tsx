import { Button } from "antd";
import "./upgrade.css";
import {
  Cash02Icon,
  ChartLineData01Icon,
  CreditCardIcon,
  Location01Icon,
  MoneyBag02Icon,
  PieChartIcon,
  QrCodeIcon,
  RepeatIcon,
  UserGroupIcon,
} from "hugeicons-react";

export const Upgrade = () => {
  return (
    <div className="upgrade-container">
      <div className="upgrade-wrapper">
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <img
                src="bill-payment.png"
                alt="Bill Payment"
                className="screen-image"
              />
            </div>
            <div className="phone-button" />
          </div>
        </div>
        <div className="upgrade-text">
          <p className="welcome">
            Welcome to the <span className="highlight">UPGRADE</span>
          </p>
          <p className="welcome-description">
            With a V account, you can enjoy a streamlined digital and mobile
            banking experience, with ease of access to your accounts, swift and
            secure transfers, withdrawals and bill payment.
          </p>
          <div className="grid-container">
            <div className="grid-item">
              <CreditCardIcon size={50} />
              <p className="grid-item-text">
                Multiple <br /> Cards
              </p>
            </div>
            <div className="grid-item">
              <UserGroupIcon size={50} />
              <p className="grid-item-text">
                Multiple <br /> Beneficiary
              </p>
            </div>
            <div className="grid-item">
              <PieChartIcon size={50} />
              <p className="grid-item-text">
                Advanced <br /> Budgeting
              </p>
            </div>
            <div className="grid-item">
              <RepeatIcon size={50} />
              <p className="grid-item-text">
                Recurring <br /> Transfer
              </p>
            </div>
            <div className="grid-item">
              <QrCodeIcon size={50} />
              <p className="grid-item-text">
                QR <br /> Code
              </p>
            </div>
            <div className="grid-item">
              <UserGroupIcon size={50} />
              <p className="grid-item-text">
                Group Target
                <br /> Savings
              </p>
            </div>
            <div className="grid-item">
              <MoneyBag02Icon size={50} />
              <p className="grid-item-text">
                Cardless <br /> Withdrawals
              </p>
            </div>
            <div className="grid-item">
              <Cash02Icon size={50} />
              <p className="grid-item-text">
                Account <br /> Analytics
              </p>
            </div>
            <div className="grid-item">
              <ChartLineData01Icon size={50} />
              <p className="grid-item-text">
                Account <br /> Analytics
              </p>
            </div>
            <div className="grid-item">
              <Location01Icon size={50} />
              <p className="grid-item-text">
                Proximity <br /> Payment
              </p>
            </div>
          </div>
          <div className="bottom-container">
            <Button
              type="primary"
              size="middle"
              style={{
                backgroundColor: "#AC3282",
                color: "rgba(248,249,250,1)",
              }}
            >
              All Features
            </Button>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-end' }}>
            <img src="/app-store.png" alt="app store" style={{width: '100px', objectFit: 'contain'}} />
            <img src="/google-play.png" alt="google play" style={{width: '100px', objectFit: 'contain'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
