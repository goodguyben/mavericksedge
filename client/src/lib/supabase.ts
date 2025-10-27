import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://fsvjrlaxqegmzcngpnib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmpybGF4cWVnbXpjbmdwbmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwOTg2OTcsImV4cCI6MjA3NDY3NDY5N30.AZ_Ik2nPCF-aaFBGFc-BZJOIIVnbgHaGeXrZI-Fy9Cg';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface Workflow {
  id: number;
  title: string;
  slug: string;
  json_data: any;
  created_at: string;
  description?: string;
}

// Workflow description interface
export interface WorkflowDescription {
  description: string;
  useCases: string[];
  benefits: string[];
}

// Search function
export async function searchWorkflows(query: string, limit: number = 20) {
  let supabaseQuery = supabase
    .from('workflows')
    .select('*')
    .order('id', { ascending: true });

  // Add text search if query provided
  if (query.trim()) {
    supabaseQuery = supabaseQuery.textSearch('title', query, {
      type: 'websearch',
      config: 'english',
    });
  }

  // Limit results
  supabaseQuery = supabaseQuery.limit(limit);

  const { data, error } = await supabaseQuery;

  if (error) {
    console.error('Error searching workflows:', error);
    throw error;
  }

  return data as Workflow[];
}

// Get featured workflows
export async function getFeaturedWorkflows(limit: number = 6) {
  const { data, error } = await supabase
    .from('workflows')
    .select('*')
    .order('id', { ascending: true })
    .limit(limit);

  if (error) {
    console.error('Error fetching featured workflows:', error);
    throw error;
  }

  return data as Workflow[];
}

// Get workflow by slug
export async function getWorkflowBySlug(slug: string) {
  const { data, error } = await supabase
    .from('workflows')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching workflow by slug:', error);
    throw error;
  }

  return data as Workflow;
}

// Extract keywords from workflow title and JSON data
export function extractKeywords(workflow: Workflow): string[] {
  const keywords: string[] = [];
  
  // Extract keywords from title
  const titleWords = workflow.title
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !['the', 'and', 'for', 'with', 'from', 'to', 'into', 'workflow', 'automation'].includes(word));
  
  keywords.push(...titleWords);
  
  // Extract keywords from JSON data if available
  if (workflow.json_data) {
    try {
      const jsonStr = typeof workflow.json_data === 'string' 
        ? workflow.json_data 
        : JSON.stringify(workflow.json_data);
      
      // Look for common n8n node types and services
      const nodeTypes = jsonStr.match(/"type":\s*"([^"]+)"/g);
      if (nodeTypes) {
        nodeTypes.forEach(match => {
          const type = match.match(/"type":\s*"([^"]+)"/)?.[1];
          if (type && !keywords.includes(type)) {
            keywords.push(type);
          }
        });
      }
      
      // Look for service names in the JSON
      const serviceNames = ['slack', 'google', 'sheets', 'gmail', 'notion', 'airtable', 'hubspot', 'salesforce', 'stripe', 'paypal', 'shopify', 'wordpress', 'discord', 'teams', 'zoom', 'calendly', 'trello', 'asana', 'jira', 'github', 'gitlab', 'aws', 'azure', 'dropbox', 'onedrive'];
      serviceNames.forEach(service => {
        if (jsonStr.toLowerCase().includes(service) && !keywords.includes(service)) {
          keywords.push(service);
        }
      });
    } catch (error) {
      console.error('Error extracting keywords from JSON:', error);
    }
  }
  
  return [...new Set(keywords)]; // Remove duplicates
}

// Generate intelligent workflow description based on title and JSON data
export function generateWorkflowDescription(workflow: Workflow): WorkflowDescription {
  const title = workflow.title.toLowerCase();
  const jsonStr = typeof workflow.json_data === 'string' 
    ? workflow.json_data 
    : JSON.stringify(workflow.json_data);
  
  // Extract workflow components
  const nodeTypes = extractNodeTypes(jsonStr);
  const services = extractServices(jsonStr);
  const triggers = extractTriggers(jsonStr);
  
  // Generate description based on patterns
  const description = generateDescription(title, nodeTypes, services, triggers);
  const useCases = generateUseCases(title, nodeTypes, services);
  const benefits = generateBenefits(title, nodeTypes, services);
  
  return {
    description,
    useCases,
    benefits
  };
}

// Extract node types from JSON
function extractNodeTypes(jsonStr: string): string[] {
  const nodeTypes: string[] = [];
  const nodeMatches = jsonStr.match(/"type":\s*"([^"]+)"/g);
  
  if (nodeMatches) {
    nodeMatches.forEach(match => {
      const type = match.match(/"type":\s*"([^"]+)"/)?.[1];
      if (type && !nodeTypes.includes(type)) {
        nodeTypes.push(type);
      }
    });
  }
  
  return nodeTypes;
}

// Extract services from JSON
function extractServices(jsonStr: string): string[] {
  const services: string[] = [];
  const serviceNames = [
    'slack', 'google', 'sheets', 'gmail', 'notion', 'airtable', 'hubspot', 
    'salesforce', 'stripe', 'paypal', 'shopify', 'wordpress', 'discord', 
    'teams', 'zoom', 'calendly', 'trello', 'asana', 'jira', 'github', 
    'gitlab', 'aws', 'azure', 'dropbox', 'onedrive', 'twitter', 'facebook',
    'instagram', 'linkedin', 'youtube', 'twilio', 'sendgrid', 'mailchimp'
  ];
  
  serviceNames.forEach(service => {
    if (jsonStr.toLowerCase().includes(service) && !services.includes(service)) {
      services.push(service);
    }
  });
  
  return services;
}

// Extract triggers from JSON
function extractTriggers(jsonStr: string): string[] {
  const triggers: string[] = [];
  const triggerTypes = ['webhook', 'schedule', 'manual', 'trigger'];
  
  triggerTypes.forEach(trigger => {
    if (jsonStr.toLowerCase().includes(trigger) && !triggers.includes(trigger)) {
      triggers.push(trigger);
    }
  });
  
  return triggers;
}

// Generate main description
function generateDescription(title: string, nodeTypes: string[], services: string[], triggers: string[]): string {
  const serviceList = services.length > 0 ? services.join(', ') : 'various services';
  const triggerList = triggers.length > 0 ? triggers.join(' or ') : 'events';
  
  // Pattern-based description generation
  if (title.includes('slack') && title.includes('notification')) {
    return `This workflow automatically sends Slack notifications when specific ${triggerList} occur. It connects ${serviceList} to your Slack workspace, ensuring your team stays informed about important updates without manual intervention. Perfect for real-time alerts and team communication.`;
  }
  
  if (title.includes('email') && (title.includes('notification') || title.includes('alert'))) {
    return `This automation sends email notifications when ${triggerList} are detected. It integrates with ${serviceList} to monitor events and automatically deliver timely email alerts to relevant stakeholders. Ideal for keeping teams informed about critical updates and system changes.`;
  }
  
  if (title.includes('sync') || title.includes('integration')) {
    return `This workflow synchronizes data between ${serviceList}, ensuring information stays consistent across platforms. It automatically handles data transfer, transformation, and updates when ${triggerList} occur. Eliminates manual data entry and reduces synchronization errors.`;
  }
  
  if (title.includes('backup') || title.includes('export')) {
    return `This automation creates backups or exports data from ${serviceList} on a regular schedule or when ${triggerList} occur. It ensures your important data is safely stored and easily recoverable, providing peace of mind and compliance with data retention policies.`;
  }
  
  if (title.includes('lead') || title.includes('crm')) {
    return `This workflow manages lead processing and CRM integration with ${serviceList}. It automatically captures, qualifies, and routes leads when ${triggerList} occur, streamlining your sales process and ensuring no potential customer falls through the cracks.`;
  }
  
  if (title.includes('social') || title.includes('post')) {
    return `This automation handles social media posting and content distribution across ${serviceList}. It schedules and publishes content when ${triggerList} occur, maintaining consistent social media presence and engaging your audience across multiple platforms.`;
  }
  
  if (title.includes('webhook')) {
    return `This workflow processes webhook data from ${serviceList} and performs automated actions based on incoming requests. It handles ${triggerList} efficiently, transforming and routing data to appropriate destinations for further processing or notifications.`;
  }
  
  // Generic description
  return `This n8n workflow automates processes involving ${serviceList} by responding to ${triggerList}. It streamlines repetitive tasks, reduces manual work, and ensures consistent execution of business processes. The workflow integrates multiple services to create a seamless automation experience.`;
}

// Generate use cases
function generateUseCases(title: string, nodeTypes: string[], services: string[]): string[] {
  const useCases: string[] = [];
  
  if (title.includes('slack') || services.includes('slack')) {
    useCases.push('Team notifications and real-time alerts');
    useCases.push('Automated status updates and progress reports');
  }
  
  if (title.includes('email') || services.includes('gmail') || services.includes('sendgrid')) {
    useCases.push('Automated email campaigns and notifications');
    useCases.push('Lead nurturing and customer communication');
  }
  
  if (title.includes('sync') || title.includes('integration')) {
    useCases.push('Data synchronization between business tools');
    useCases.push('Eliminating duplicate data entry across platforms');
  }
  
  if (title.includes('crm') || services.includes('hubspot') || services.includes('salesforce')) {
    useCases.push('Lead management and customer relationship automation');
    useCases.push('Sales pipeline tracking and follow-up automation');
  }
  
  if (title.includes('social') || services.includes('twitter') || services.includes('facebook')) {
    useCases.push('Social media content scheduling and distribution');
    useCases.push('Brand monitoring and engagement automation');
  }
  
  if (title.includes('backup') || title.includes('export')) {
    useCases.push('Regular data backups and archival processes');
    useCases.push('Compliance reporting and data retention');
  }
  
  if (title.includes('webhook')) {
    useCases.push('Third-party service integration and data processing');
    useCases.push('Real-time event handling and response automation');
  }
  
  // Add generic use cases if not enough specific ones
  if (useCases.length < 2) {
    useCases.push('Business process automation and workflow optimization');
    useCases.push('Reducing manual tasks and human error');
  }
  
  return useCases.slice(0, 4); // Limit to 4 use cases
}

// Generate benefits
function generateBenefits(title: string, nodeTypes: string[], services: string[]): string[] {
  const benefits: string[] = [];
  
  if (title.includes('notification') || title.includes('alert')) {
    benefits.push('Instant notifications keep teams informed in real-time');
    benefits.push('Reduces response time to critical events and issues');
  }
  
  if (title.includes('sync') || title.includes('integration')) {
    benefits.push('Eliminates manual data entry and reduces errors');
    benefits.push('Ensures data consistency across all business systems');
  }
  
  if (title.includes('automation') || nodeTypes.length > 3) {
    benefits.push('Saves hours of manual work each week');
    benefits.push('Increases productivity and operational efficiency');
  }
  
  if (title.includes('backup') || title.includes('export')) {
    benefits.push('Protects against data loss and system failures');
    benefits.push('Ensures compliance with data retention requirements');
  }
  
  if (title.includes('lead') || title.includes('crm')) {
    benefits.push('Improves lead conversion rates and sales efficiency');
    benefits.push('Ensures no potential customers are overlooked');
  }
  
  // Add generic benefits if not enough specific ones
  if (benefits.length < 2) {
    benefits.push('Streamlines business processes and reduces manual effort');
    benefits.push('Improves accuracy and consistency of operations');
  }
  
  return benefits.slice(0, 3); // Limit to 3 benefits
}

// Get related workflows based on keyword matching
export async function getRelatedWorkflows(currentWorkflow: Workflow, limit: number = 6): Promise<Workflow[]> {
  try {
    const keywords = extractKeywords(currentWorkflow);
    
    if (keywords.length === 0) {
      // Fallback to random workflows if no keywords found
      return await getFeaturedWorkflows(limit);
    }
    
    // Search for workflows that contain any of the keywords
    const relatedWorkflows: Workflow[] = [];
    const seenIds = new Set([currentWorkflow.id]); // Exclude current workflow
    
    for (const keyword of keywords.slice(0, 5)) { // Limit to first 5 keywords to avoid too many queries
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .textSearch('title', keyword, {
          type: 'websearch',
          config: 'english',
        })
        .not('id', 'eq', currentWorkflow.id)
        .limit(10);
      
      if (!error && data) {
        data.forEach(workflow => {
          if (!seenIds.has(workflow.id) && relatedWorkflows.length < limit) {
            relatedWorkflows.push(workflow);
            seenIds.add(workflow.id);
          }
        });
      }
      
      if (relatedWorkflows.length >= limit) break;
    }
    
    // If we don't have enough related workflows, fill with random ones
    if (relatedWorkflows.length < limit) {
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .not('id', 'eq', currentWorkflow.id)
        .order('id', { ascending: true })
        .limit(limit * 2); // Get more to have options
      
      if (!error && data) {
        const shuffled = data.sort(() => 0.5 - Math.random());
        shuffled.forEach(workflow => {
          if (!seenIds.has(workflow.id) && relatedWorkflows.length < limit) {
            relatedWorkflows.push(workflow);
            seenIds.add(workflow.id);
          }
        });
      }
    }
    
    return relatedWorkflows.slice(0, limit);
  } catch (error) {
    console.error('Error getting related workflows:', error);
    // Fallback to featured workflows
    return await getFeaturedWorkflows(limit);
  }
}
