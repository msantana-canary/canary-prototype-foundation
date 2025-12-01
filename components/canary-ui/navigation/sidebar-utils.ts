/**
 * Sidebar Configuration Utilities
 * 
 * Pure functions for modifying sidebar sections to support flexible
 * sidebar configurations while maintaining type safety and immutability.
 */

import { SidebarSection, SidebarNavigationItem } from "./CanarySidebar";

/**
 * Hide specific products from sidebar sections
 * @param sections - Original sidebar sections
 * @param productIds - Array of product IDs to hide
 * @returns New sections array with specified products removed
 */
export const hideProducts = (
  sections: SidebarSection[],
  productIds: string[]
): SidebarSection[] => {
  return sections.map(section => ({
    ...section,
    items: section.items.filter(item => !productIds.includes(item.id))
  })).filter(section => section.items.length > 0); // Remove empty sections
};

/**
 * Add a product to sidebar sections at a specific position
 * @param sections - Original sidebar sections
 * @param product - Product to add
 * @param options - Insertion options
 * @returns New sections array with product added
 */
export const addProduct = (
  sections: SidebarSection[],
  product: SidebarNavigationItem,
  options: {
    insertAfter?: string;
    insertBefore?: string;
    insertAtStart?: boolean;
    insertAtEnd?: boolean;
    sectionId?: string; // Which section to add to (defaults to first section)
  } = {}
): SidebarSection[] => {
  const { insertAfter, insertBefore, insertAtStart, insertAtEnd, sectionId } = options;
  
  if (!sections.length) {
    // If no sections exist, create a new one
    return [{
      id: 'main-section',
      items: [product]
    }];
  }

  return sections.map(section => {
    // Skip if targeting specific section and this isn't it
    if (sectionId && section.id !== sectionId) {
      return section;
    }
    
    // If no specific section targeted, only modify first section
    if (!sectionId && section !== sections[0]) {
      return section;
    }

    let newItems = [...section.items];

    if (insertAfter) {
      const index = newItems.findIndex(item => item.id === insertAfter);
      if (index !== -1) {
        newItems.splice(index + 1, 0, product);
      } else {
        // If insertAfter item not found, add at end
        newItems.push(product);
      }
    } else if (insertBefore) {
      const index = newItems.findIndex(item => item.id === insertBefore);
      if (index !== -1) {
        newItems.splice(index, 0, product);
      } else {
        // If insertBefore item not found, add at start
        newItems.unshift(product);
      }
    } else if (insertAtStart) {
      newItems.unshift(product);
    } else {
      // Default: add at end
      newItems.push(product);
    }

    return {
      ...section,
      items: newItems
    };
  });
};

/**
 * Reorder products within sidebar sections
 * @param sections - Original sidebar sections
 * @param productOrder - Array of product IDs in desired order
 * @param sectionId - Which section to reorder (defaults to first section)
 * @returns New sections array with products reordered
 */
export const reorderProducts = (
  sections: SidebarSection[],
  productOrder: string[],
  sectionId?: string
): SidebarSection[] => {
  return sections.map(section => {
    // Skip if targeting specific section and this isn't it
    if (sectionId && section.id !== sectionId) {
      return section;
    }
    
    // If no specific section targeted, only modify first section
    if (!sectionId && section !== sections[0]) {
      return section;
    }

    // Create a map for quick lookup
    const itemMap = new Map(section.items.map(item => [item.id, item]));
    
    // Build new items array based on desired order
    const reorderedItems: SidebarNavigationItem[] = [];
    
    // Add items in specified order
    productOrder.forEach(productId => {
      const item = itemMap.get(productId);
      if (item) {
        reorderedItems.push(item);
        itemMap.delete(productId); // Remove from map
      }
    });
    
    // Add any remaining items (not specified in order) at the end
    itemMap.forEach(item => {
      reorderedItems.push(item);
    });

    return {
      ...section,
      items: reorderedItems
    };
  });
};

/**
 * Create a custom section from an array of navigation items
 * @param items - Navigation items for the section
 * @param options - Section options
 * @returns New sidebar section
 */
export const createCustomSection = (
  items: SidebarNavigationItem[],
  options: {
    id?: string;
    title?: string;
  } = {}
): SidebarSection => {
  return {
    id: options.id || 'custom-section',
    title: options.title,
    items
  };
};

/**
 * Merge custom sections with standard sections
 * @param customSections - Custom sections to add
 * @param standardSections - Standard sections to merge with
 * @param options - Merge options
 * @returns New sections array with custom sections merged
 */
export const mergeWithStandard = (
  customSections: SidebarSection[],
  standardSections: SidebarSection[],
  options: {
    insertAtStart?: boolean;
    insertAtEnd?: boolean;
    replaceStandard?: boolean;
  } = {}
): SidebarSection[] => {
  const { insertAtStart, insertAtEnd, replaceStandard } = options;

  if (replaceStandard) {
    return customSections;
  }

  if (insertAtStart) {
    return [...customSections, ...standardSections];
  }

  // Default: insert at end
  return [...standardSections, ...customSections];
};

/**
 * Update a specific product in sidebar sections
 * @param sections - Original sidebar sections
 * @param productId - ID of product to update
 * @param updates - Partial updates to apply
 * @returns New sections array with product updated
 */
export const updateProduct = (
  sections: SidebarSection[],
  productId: string,
  updates: Partial<SidebarNavigationItem>
): SidebarSection[] => {
  return sections.map(section => ({
    ...section,
    items: section.items.map(item =>
      item.id === productId
        ? { ...item, ...updates }
        : item
    )
  }));
};

/**
 * Add badge to a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to badge
 * @param badge - Badge value (string or number)
 * @returns New sections array with badge added
 */
export const addBadge = (
  sections: SidebarSection[],
  productId: string,
  badge: string | number
): SidebarSection[] => {
  return updateProduct(sections, productId, { badge });
};

/**
 * Remove badge from a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to remove badge from
 * @returns New sections array with badge removed
 */
export const removeBadge = (
  sections: SidebarSection[],
  productId: string
): SidebarSection[] => {
  return updateProduct(sections, productId, { badge: undefined });
};

/**
 * Disable a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to disable
 * @returns New sections array with product disabled
 */
export const disableProduct = (
  sections: SidebarSection[],
  productId: string
): SidebarSection[] => {
  return updateProduct(sections, productId, { isDisabled: true });
};

/**
 * Enable a specific product
 * @param sections - Original sidebar sections
 * @param productId - ID of product to enable
 * @returns New sections array with product enabled
 */
export const enableProduct = (
  sections: SidebarSection[],
  productId: string
): SidebarSection[] => {
  return updateProduct(sections, productId, { isDisabled: false });
};