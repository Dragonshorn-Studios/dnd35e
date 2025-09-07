const registeredPartials = new Set();

export const registerPartial = async (filePath: string, partialName: string) => {
  if (registeredPartials.has(partialName)) {
    return;
  }

  try {
    const response = await fetch(filePath); // Fetch the template file
    const templateContent = await response.text(); // Read response as text
    Handlebars.registerPartial(partialName, templateContent); // Register the partial
    console.log(`Partial registered successfully: ${partialName}`);
    registeredPartials.add(partialName);
  } catch (error) {
    console.error(`Error loading partial ${partialName}:`, error);
  }
};
