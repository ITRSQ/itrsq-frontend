const StickyMenu = ({
  anchor1,
  anchor1Id,
  anchor2,
  anchor2Id,

  anchor3,
  anchor3Id,
}) => {
  return (
    <div className="stickyMenu">
      <h3
        onClick={() =>
          document
            .getElementById(anchor1Id)
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {anchor1}
      </h3>
      <div className="straight-line-vertical"></div>
      <h3
        onClick={() =>
          document
            .getElementById(anchor2Id)
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {anchor2}
      </h3>
      <div className="straight-line-vertical"></div>
      <h3
        onClick={() =>
          document
            .getElementById(anchor3Id)
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {anchor3}
      </h3>
    </div>
  );
};

export default StickyMenu;
