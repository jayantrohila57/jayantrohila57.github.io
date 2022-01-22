function calculateCollapsedScale () {
    // The menu title can act as the marker for the collapsed state.
    const collapsed = menuTitle.getBoundingClientRect();
  
    // Whereas the menu as a whole (title plus items) can act as
    // a proxy for the expanded state.
    const expanded = menu.getBoundingClientRect();
    return {
      x: collapsed.width / expanded.width,
      y: collapsed.height / expanded.height
    };
  }