import Options from "./Option";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "App Modernization",
      handler: props.actionProvider.handleDevOps,
      id: 1,
    },
    {
      name: "Cloud Orchestration",
      handler: props.actionProvider.handleLocalStats,
      id: 2,
    },
    {
      name: "DevOps Automation",
      handler: props.actionProvider.handleContact,
      id: 3,
    },
    {
      name: "IT Security",
      handler: props.actionProvider.handleITSecurity,
      id: 4,
    },
    {
      name: "AI/ML",
      handler: props.actionProvider.handleOpenings,
      id: 5,
    },
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
