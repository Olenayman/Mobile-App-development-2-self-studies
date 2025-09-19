# Mobile-App-Development-2

## Project: Static React Native Weather App UI

This project demonstrates a **static user interface for a weather app**, built using React Native. It does not include any dynamic functionality or data fetching—its purpose is to showcase layout and styling using React Native’s core components.

### Core Components Used

- **Image:** Displays weather icons for current conditions and the forecast. Images make the UI visually informative and engaging.
- **TextInput:** Allows users to enter a city name. This input field is styled to be prominent and user-friendly, demonstrating how text inputs are integrated into mobile layouts.
- **ScrollView:** Enables vertical scrolling for the overall app layout. This is important for mobile screens, where space is limited and content often needs to be scrollable.

> Besides View and Text, these three components play a crucial role in mobile app development:
> - **Image** enhances visual feedback and branding.
> - **TextInput** enables user interaction and data entry.
> - **ScrollView** allows content to be accessible on various device sizes by making layouts scrollable.

### Styling with StyleSheet

Styling in React Native differs from web-based React in several ways:
- **No CSS files:** Styles are defined in JavaScript using the `StyleSheet` API.
- **CamelCase properties:** Style properties use camelCase (e.g., `backgroundColor` instead of `background-color`).
- **Flexbox for layout:** React Native relies on Flexbox for responsive layouts, which works similarly to web but is optimized for mobile devices.
- **Platform-specific rendering:** Styles are mapped to native Android and iOS components, so some properties may look different on each platform.

#### Responsive and Custom Styling

- The app uses colors, spacing, rounded corners, drop shadows, and font scaling to create a visually clear and appealing UI.
- The layout adapts to different device sizes using measurements from `Dimensions.get('window')`.
- Components are organized in cards and sections for clarity.

#### Challenge Extension

The styles are designed to look good on various device sizes when tested in Expo by using percentage-based sizing and flexible layout strategies.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Olenayman/Mobile-App-Development-2.git
   cd Mobile-App-Development-2
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the app with Expo:
   ```bash
   expo start
   ```
   Scan the QR code in your Expo Go app or run on an emulator.

---

Explore the code to see how React Native’s core components and StyleSheet are used to build a static, attractive weather app UI!
