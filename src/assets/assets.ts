import Logo from "./logo.png";
import MarketGraph from "./market-graph.jpg";
import DjangoSVG from "./django.svg";
import FlaskLogo from "./flask.svg";
import ScikitLearnLogo from "./scikit-learn.svg";
import FastApiLogo from "./fastapi-logo.webp";
import PythonLogo from "./python.svg";
import PytorchLogo from "./pytorch.svg";
import LoaderAnimation from "./Loader.json";
import LoaderSpinner from "./LoadingSpinner.json";
import TensorFlowLogo from "./tensorflow.svg";

let Placeholder =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png";

const METRICS_TEMPLATE = [
  {
    key: "marketSize",
    label: "Market Size (2025)",
    placeholder: "USD XX.X million",
  },
  {
    key: "revenueForecast",
    label: "Revenue Forecast (2034)",
    placeholder: "USD XX.X million",
  },
  {
    key: "growthRate",
    label: "Growth Rate",
    placeholder: "CAGR of XX.X% (2025–2034)",
  },
  { key: "baseYear", label: "Base Year", placeholder: "2024" },
  { key: "historicalData", label: "Historical Data", placeholder: "2020–2023" },
  { key: "forecastPeriod", label: "Forecast Period", placeholder: "2025–2034" },
  {
    key: "quantitativeUnits",
    label: "Quantitative Units",
    placeholder: "Revenue in USD million/billion, CAGR",
  },
  {
    key: "reportCoverage",
    label: "Report Coverage",
    placeholder:
      "Revenue forecast, trends, competitive analysis, growth drivers",
  },
  {
    key: "segmentsCovered",
    label: "Segments Covered",
    placeholder: "Add segments covered",
  },
  {
    key: "regionalScope",
    label: "Regional Scope",
    placeholder: "North America, Europe, Asia-Pacific, etc.",
  },
  {
    key: "countryScope",
    label: "Country Scope",
    placeholder: "U.S., Canada, India, etc.",
  },
];

// regionsTemplate.ts
const REGIONS_TEMPLATE = [
  {
    region: "North America",
    countries: "U.S., Canada, Mexico, Others",
  },
  {
    region: "Europe",
    countries: "Germany, UK, France, Others",
  },
  {
    region: "Asia Pacific",
    countries: "China, India, Japan, South Korea, Others",
  },
  {
    region: "Central & South America",
    countries: "Brazil, Argentina, Colombia, Others",
  },
  {
    region: "Middle East & Africa",
    countries: "Saudi Arabia, UAE, Others",
  },
];

export {
  MarketGraph,
  Logo,
  DjangoSVG,
  ScikitLearnLogo,
  FlaskLogo,
  FastApiLogo,
  PytorchLogo,
  PythonLogo,
  TensorFlowLogo,
  Placeholder,
  LoaderAnimation,
  LoaderSpinner,
  METRICS_TEMPLATE,
  REGIONS_TEMPLATE,
};
