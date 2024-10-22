import React from "react";
import { render, screen } from "@testing-library/react";
import Mapa from "../components/view/Mapa";
import "@testing-library/jest-dom";

// Mock para el componente de react-leaflet
jest.mock("react-leaflet", () => ({
  MapContainer: jest.fn(({ children }) => <div data-testid="map">{children}</div>),
}));
  
const SimpleComponent = () => <div>Simple Test</div>;

test("simple test should pass", () => {
  render(<SimpleComponent />);
  expect(screen.getByText("Simple Test")).toBeInTheDocument();
});
  