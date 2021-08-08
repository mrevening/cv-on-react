import React from "react";
import Header from './components/Header-component/Header'
import SidePane from './components/SidePane-component/SidePane'
import MainPane from './components/MainPane-component/MainPane'
import Footer from './components/Footer-component/Footer'
import Section from './components/Section-component/Section'
import SectionEntry from './components/SectionEntry-component/SectionEntry'

const Components = {
    header: Header,
    sidepane: SidePane,
    mainpane: MainPane,
    footer: Footer,
    section: Section,
    sectionEntry: SectionEntry
  };

 var components = block => {
    // component does exist
    if (typeof Components[block.componentName] !== "undefined") {
        return React.createElement(Components[block.componentName], block);
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {block.componentName} has not been created yet.</div>
    );
}

export default components;