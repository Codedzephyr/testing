import { Button, Typography, Row, Col, Carousel } from "antd";
import type { CarouselProps } from "antd";
import './carousel.css'

const { Title, Paragraph, Text } = Typography;

type DotPosition = CarouselProps["dotPosition"];

// const contentStyle: React.CSSProperties = {
// //   height: "20rem",
//   //   color: "#fff",
//   //   lineHeight: "160px",
//   //   textAlign: "center",
//   //   background: "#364d79",
// };

const HeroSection = () => {
  return (
    <div
      style={{
        paddingLeft: "10rem",
        paddingRight: "10rem",
        paddingTop: "15rem",
        backgroundColor: "#fff",
      }}
    >
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <Title
            style={{
              background: "linear-gradient(to right, #AC3282 0%, red 100%)",
              fontWeight: 700,
              fontSize: "4.5rem",
              backgroundClip: "text",
              WebkitBackgroundClip: "text", // Safari & Chrome support
              color: "transparent",
              WebkitTextFillColor: "transparent", // Safari & Chrome support
            }}
          >
            Digital Banking
            <br />
            Re-imagined to
            <br />
            get you more
          </Title>
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#AC3282",
              color: "rgba(248,249,250,1)",
              marginTop: "3rem",
            }}
          >
            Get Started
          </Button>

          <Paragraph
            style={{ fontSize: "1.5rem", width: "75%", color: "#AC3282" }}
          >
            We have redefined the meaning of more when it comes to virtual
            banking services in Nigeria.
          </Paragraph>
          <Paragraph
            style={{
              color: "#AC3282",
              marginBottom: "2rem",
              fontSize: "1.5rem",
              fontWeight: "700",
              width: "75%",
            }}
          >
            With absolutely zero charge on transactions, free account
            maintenance and monthly interest on savings, what’s your excuse
            again?
          </Paragraph>
          <Paragraph
            strong
            style={{
              color: "#AC3282",
              fontWeight: "bolder",
              fontSize: "1.7rem",
              marginBottom: "2rem",
            }}
          >
            Enjoy easy-to-use budgeting features and analytics
          </Paragraph>
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Carousel
            dotPosition="right"
            className="custom-carousel"
            dots={true}
            autoplay={{ dotDuration: true }} autoplaySpeed={5000}
            style={{
              height: "500px",
              position: 'relative',
              backgroundColor: 'orange'
            }}
          >
            <div>
              <img
                src="/slider/slider1.jpg"
                style={{
                  width: "100%",
                  height: "500px", 
                  objectFit: "cover",
                }}
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="/slider/slider2.jpg"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="/slider/slider3.jpg"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
                alt="Slide 3"
              />
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
