const tools = [
  { name: "ChatGPT", category: "General Assistant", summary: "Versatile assistant for writing, coding, analysis, and multimodal tasks.", pricingType: "paid", pricing: "Free tier; Plus/Pro/Team/Enterprise", bestFor: "General AI use across work and study", useCases: ["Writing", "Coding", "Analysis", "Learning"], specs: ["Multimodal", "Tool use", "API ecosystem"], features: ["Custom GPTs", "File analysis", "Voice"], url: "https://chatgpt.com", badge: "Popular" },
  { name: "Claude", category: "General Assistant", summary: "Long-context assistant for reasoning, writing, and coding.", pricingType: "paid", pricing: "Free tier; Pro/Team/Enterprise", bestFor: "Long documents and structured analysis", useCases: ["Research", "Drafting", "Coding", "Planning"], specs: ["Large context", "API access", "Model variants"], features: ["Artifacts", "Document understanding", "Strong reasoning"], url: "https://claude.ai", badge: "Long Context" },
  { name: "Gemini", category: "General Assistant", summary: "Google AI assistant integrated with Workspace and Google ecosystem.", pricingType: "paid", pricing: "Free options; paid Google AI tiers", bestFor: "Google Workspace users", useCases: ["Email drafting", "Slides", "Research", "Coding"], specs: ["Multimodal model family", "Workspace integration", "Cloud options"], features: ["Docs/Gmail help", "Image understanding", "Reasoning modes"], url: "https://gemini.google.com", badge: "Ecosystem" },
  { name: "Microsoft Copilot", category: "General Assistant", summary: "AI assistant embedded across Microsoft products.", pricingType: "enterprise", pricing: "Consumer and enterprise plans", bestFor: "Teams on Microsoft stack", useCases: ["Docs", "Meetings", "Spreadsheets", "Email"], specs: ["M365 integration", "Security controls", "Enterprise admin"], features: ["Teams recap", "PowerPoint drafting", "Business grounding"], url: "https://copilot.microsoft.com", badge: "Enterprise" },
  { name: "Meta AI", category: "General Assistant", summary: "Meta assistant across social and messaging platforms.", pricingType: "free", pricing: "Free in supported regions/apps", bestFor: "Consumer chat and lightweight tasks", useCases: ["Q&A", "Image creation", "Social content", "Everyday help"], specs: ["App integrations", "Model family", "Cross-device access"], features: ["Conversational help", "Creative generation", "Assistant mode"], url: "https://www.meta.ai", badge: "Consumer" },
  { name: "Grok", category: "General Assistant", summary: "Conversational assistant focused on real-time style responses.", pricingType: "paid", pricing: "Included with selected subscriptions", bestFor: "General conversation and brainstorming", useCases: ["Q&A", "Summaries", "Ideation", "Coding help"], specs: ["LLM assistant", "Web-connected responses", "Multimodal support"], features: ["Live style interaction", "Content generation", "Coding support"], url: "https://x.ai", badge: "Realtime" },
  { name: "Perplexity", category: "Research", summary: "AI answer engine with citations for web research.", pricingType: "free", pricing: "Free core; Pro tier", bestFor: "Fast source-backed research", useCases: ["Fact-checking", "Market research", "Learning", "Trend scans"], specs: ["Web retrieval", "Citations", "Multi-model access"], features: ["Focus modes", "Collections", "Research threads"], url: "https://www.perplexity.ai", badge: "Citations" },
  { name: "You.com", category: "Research", summary: "Search-plus-assistant platform for research and productivity.", pricingType: "free", pricing: "Free and paid plans", bestFor: "Search and assistant workflows", useCases: ["Research", "Writing", "Code help", "Summaries"], specs: ["Search integration", "Assistant modes", "App connectors"], features: ["Cited answers", "Workspace tools", "Prompt modes"], url: "https://you.com", badge: "Search AI" },
  { name: "Poe", category: "General Assistant", summary: "Multi-model AI chat platform with custom bots.", pricingType: "free", pricing: "Free tier; subscription tiers", bestFor: "Trying multiple models in one app", useCases: ["Q&A", "Writing", "Bot creation", "Testing prompts"], specs: ["Multi-model access", "Bot publishing", "Web/mobile"], features: ["Custom bots", "Model switching", "Shareable chats"], url: "https://poe.com", badge: "Multi-Model" },
  { name: "Pi", category: "General Assistant", summary: "Personal conversational AI focused on supportive interactions.", pricingType: "free", pricing: "Free experience", bestFor: "Daily conversation and coaching-style chat", useCases: ["Reflection", "Journaling", "Conversation", "Planning"], specs: ["Conversational model", "Web and mobile", "Voice interactions"], features: ["Friendly tone", "Guided conversation", "Personal support"], url: "https://pi.ai", badge: "Companion" },

  { name: "GitHub Copilot", category: "Developer Tools", summary: "AI coding assistant for completion, chat, edits, and PR support.", pricingType: "paid", pricing: "Free for select users; paid individual/business", bestFor: "Software developers and teams", useCases: ["Code completion", "Refactoring", "Tests", "Debugging"], specs: ["IDE support", "Codebase-aware chat", "Enterprise policies"], features: ["Inline suggestions", "Multi-file edits", "CLI/PR workflow"], url: "https://github.com/features/copilot", badge: "Code" },
  { name: "Cursor", category: "Developer Tools", summary: "AI-first code editor for fast generation and debugging.", pricingType: "paid", pricing: "Free and Pro plans", bestFor: "Developers wanting AI-native editing", useCases: ["Refactor", "Bug fix", "Codebase Q&A", "Prototyping"], specs: ["Codebase indexing", "Inline edits", "Model selection"], features: ["Chat-to-code", "Agentic editing", "Context-aware suggestions"], url: "https://www.cursor.com", badge: "AI IDE" },
  { name: "Windsurf", category: "Developer Tools", summary: "Agentic IDE workflow for code generation and project changes.", pricingType: "paid", pricing: "Free and paid tiers", bestFor: "Developers using agent-style coding", useCases: ["Feature building", "Code edits", "Debugging", "Automation"], specs: ["Editor integration", "AI agents", "Project context"], features: ["Task-oriented coding", "Inline edits", "Chat workflow"], url: "https://windsurf.com", badge: "Agent IDE" },
  { name: "Codeium", category: "Developer Tools", summary: "AI coding assistant with autocomplete and chat.", pricingType: "free", pricing: "Free core; enterprise offerings", bestFor: "Cost-effective AI coding support", useCases: ["Autocomplete", "Code chat", "Refactoring", "Docs"], specs: ["IDE plugins", "Enterprise controls", "Model-powered suggestions"], features: ["Fast completions", "Code search", "Chat in IDE"], url: "https://codeium.com", badge: "Free Tier" },
  { name: "Tabnine", category: "Developer Tools", summary: "AI coding assistant with privacy-focused enterprise options.", pricingType: "paid", pricing: "Pro and enterprise plans", bestFor: "Security-conscious teams", useCases: ["Completions", "Team coding", "Code generation", "Refactor"], specs: ["IDE support", "Policy controls", "Deployment options"], features: ["Private deployment", "Team governance", "Autocomplete"], url: "https://www.tabnine.com", badge: "Privacy" },
  { name: "Sourcegraph Cody", category: "Developer Tools", summary: "AI coding assistant with deep codebase context.", pricingType: "paid", pricing: "Free and enterprise plans", bestFor: "Large repositories", useCases: ["Code navigation", "Refactor", "PR help", "Debugging"], specs: ["Code graph context", "Enterprise integrations", "IDE/chat"], features: ["Context-rich answers", "Code edits", "Repo-wide assistance"], url: "https://sourcegraph.com/cody", badge: "Codebase" },
  { name: "Replit", category: "Developer Tools", summary: "Cloud development platform with AI coding assistance.", pricingType: "free", pricing: "Free and paid plans", bestFor: "Rapid prototyping and app deployment", useCases: ["Prototype apps", "Learning to code", "Deploying projects", "Collaborative coding"], specs: ["Browser IDE", "Runtime hosting", "AI coding features"], features: ["Instant environments", "Deploy button", "Team collaboration"], url: "https://replit.com", badge: "Cloud IDE" },
  { name: "v0", category: "Developer Tools", summary: "Prompt-to-UI generation for web interfaces.", pricingType: "paid", pricing: "Free and paid usage tiers", bestFor: "Front-end prototyping", useCases: ["UI generation", "React scaffolding", "Design iterations", "Landing pages"], specs: ["Web app generation", "Framework-oriented output", "Prompt-driven"], features: ["Component generation", "Fast iteration", "Exportable code"], url: "https://v0.dev", badge: "UI Builder" },
  { name: "Bolt.new", category: "Developer Tools", summary: "Browser-based full-stack app generation and editing.", pricingType: "paid", pricing: "Usage-based paid tiers", bestFor: "Fast full-stack prototypes", useCases: ["App generation", "Frontend + backend", "Rapid iteration", "MVPs"], specs: ["Browser runtime", "Prompt-based coding", "Integrated dev loop"], features: ["Instant app setup", "Agentic changes", "Deploy-ready output"], url: "https://bolt.new", badge: "Full Stack" },
  { name: "JetBrains AI", category: "Developer Tools", summary: "AI assistant integrated in JetBrains IDE ecosystem.", pricingType: "paid", pricing: "Paid add-on / plan-based", bestFor: "JetBrains IDE users", useCases: ["Code completion", "Refactoring", "Explaining code", "Tests"], specs: ["IDE-native", "Project context", "Model-backed features"], features: ["Inline assistance", "Chat", "Code transformations"], url: "https://www.jetbrains.com/ai/", badge: "IDE Native" },
  { name: "Qodo", category: "Developer Tools", summary: "AI platform focused on code quality, tests, and review.", pricingType: "paid", pricing: "Team and enterprise plans", bestFor: "Quality-first engineering teams", useCases: ["Test generation", "Code review", "PR checks", "Quality workflows"], specs: ["IDE and Git integrations", "Quality agents", "Team features"], features: ["Context-aware review", "Test suggestions", "Workflow automation"], url: "https://www.qodo.ai", badge: "Quality" },

  { name: "Notion AI", category: "Productivity", summary: "AI inside Notion for docs, projects, and knowledge workflows.", pricingType: "paid", pricing: "Included/add-on by plan", bestFor: "Knowledge and project workflows", useCases: ["Summaries", "Drafting", "Meeting notes", "Task planning"], specs: ["Workspace context", "Database integration", "Collaboration"], features: ["Auto summaries", "Writing assist", "Action extraction"], url: "https://www.notion.so/product/ai", badge: "Workflow" },
  { name: "ClickUp AI", category: "Productivity", summary: "AI productivity features for project management and docs.", pricingType: "paid", pricing: "Paid plans with AI features", bestFor: "Project-focused teams", useCases: ["Task planning", "Updates", "Docs", "Summaries"], specs: ["Work management integration", "Collaboration", "Template support"], features: ["AI writing", "Task suggestions", "Project summaries"], url: "https://clickup.com/ai", badge: "PM" },
  { name: "Otter.ai", category: "Productivity", summary: "Meeting transcription and summary assistant.", pricingType: "free", pricing: "Free; Pro/Business/Enterprise", bestFor: "Meeting-heavy teams", useCases: ["Transcription", "Action items", "Meeting records", "Search"], specs: ["Real-time transcription", "Speaker labels", "Integrations"], features: ["Auto summaries", "Highlights", "Exports"], url: "https://otter.ai", badge: "Meetings" },
  { name: "Fireflies.ai", category: "Productivity", summary: "AI meeting assistant for recording, notes, and search.", pricingType: "free", pricing: "Free and paid tiers", bestFor: "Sales and ops meetings", useCases: ["Meeting notes", "Call analysis", "Action capture", "CRM workflows"], specs: ["Meeting integrations", "Searchable transcripts", "Team analytics"], features: ["AI summaries", "Topic tracking", "Collaboration notes"], url: "https://fireflies.ai", badge: "Calls" },
  { name: "Motion", category: "Productivity", summary: "AI calendar and task planning assistant.", pricingType: "paid", pricing: "Paid subscription", bestFor: "Time and task optimization", useCases: ["Scheduling", "Auto-planning", "Prioritization", "Team calendars"], specs: ["Calendar integration", "Task engine", "Automation"], features: ["Auto scheduling", "Priority planning", "Workload balancing"], url: "https://www.usemotion.com", badge: "Scheduling" },

  { name: "Grammarly", category: "Writing", summary: "Writing assistant for grammar, tone, and clarity.", pricingType: "free", pricing: "Free; Premium/Business", bestFor: "Professional communication", useCases: ["Email", "Reports", "Editing", "Tone control"], specs: ["Cross-app integrations", "Tone detection", "Style tools"], features: ["Rewrite suggestions", "Grammar checks", "AI drafting"], url: "https://www.grammarly.com", badge: "Writing" },
  { name: "QuillBot", category: "Writing", summary: "Paraphrasing and writing improvement platform.", pricingType: "free", pricing: "Free and premium plans", bestFor: "Rewriting and polishing text", useCases: ["Paraphrasing", "Summarization", "Grammar", "Citation support"], specs: ["Web tools", "Browser extension", "Academic support"], features: ["Paraphraser", "Grammar checker", "Summarizer"], url: "https://quillbot.com", badge: "Paraphrase" },
  { name: "Copy.ai", category: "Marketing", summary: "AI content generation for sales and marketing workflows.", pricingType: "paid", pricing: "Free trial; paid plans", bestFor: "Go-to-market teams", useCases: ["Campaign copy", "Emails", "Outbound messaging", "Content briefs"], specs: ["Workflow templates", "Team collaboration", "Integrations"], features: ["Content generation", "Automations", "Brand-style workflows"], url: "https://www.copy.ai", badge: "GTM" },
  { name: "Jasper", category: "Marketing", summary: "AI marketing platform for campaigns and brand voice.", pricingType: "paid", pricing: "Creator/Pro/Business", bestFor: "Marketing teams", useCases: ["Ads", "Blog writing", "Landing pages", "Campaign ideation"], specs: ["Brand memory", "Templates", "Team controls"], features: ["Brand voice", "Workflow tools", "Repurposing"], url: "https://www.jasper.ai", badge: "Marketing" },
  { name: "Writesonic", category: "Marketing", summary: "AI writing and marketing content platform.", pricingType: "paid", pricing: "Free trial; subscription plans", bestFor: "SEO and content teams", useCases: ["Blogs", "Ads", "Social posts", "Product descriptions"], specs: ["Template library", "SEO options", "Integrations"], features: ["Content generation", "Brand controls", "Workflow assistance"], url: "https://writesonic.com", badge: "Content" },
  { name: "Surfer", category: "Marketing", summary: "SEO optimization platform with AI writing support.", pricingType: "paid", pricing: "Paid plans", bestFor: "Search-optimized content", useCases: ["SEO briefs", "Content optimization", "SERP planning", "Audits"], specs: ["SEO scoring", "Keyword workflows", "Content editor"], features: ["Optimization suggestions", "Topic coverage", "Performance insights"], url: "https://surferseo.com", badge: "SEO" },

  { name: "Canva Magic Studio", category: "Design", summary: "AI-enhanced visual creation tools in Canva.", pricingType: "free", pricing: "Free; Pro/Teams", bestFor: "Fast design and social assets", useCases: ["Social graphics", "Presentations", "Image edits", "Brand content"], specs: ["Template-first", "Text-to-image", "Team collaboration"], features: ["Magic Write", "Background tools", "Resizing"], url: "https://www.canva.com/magic-studio/", badge: "Design" },
  { name: "Adobe Firefly", category: "Design", summary: "Adobe generative AI for image and design workflows.", pricingType: "paid", pricing: "Free credits; paid Creative Cloud", bestFor: "Adobe creators", useCases: ["Image generation", "Generative fill", "Text effects", "Asset ideation"], specs: ["Creative Cloud integration", "Credit model", "Commercial workflows"], features: ["Photoshop integration", "Generative tools", "Recolor"], url: "https://firefly.adobe.com", badge: "Creative Cloud" },
  { name: "Midjourney", category: "Image Generation", summary: "High-fidelity AI image generation for creative work.", pricingType: "paid", pricing: "Subscription plans", bestFor: "Concept art and visual ideation", useCases: ["Concept art", "Moodboards", "Storyboards", "Creative exploration"], specs: ["Prompt-based generation", "Style controls", "Upscale options"], features: ["Remix", "Variations", "High-quality output"], url: "https://www.midjourney.com", badge: "Creative" },
  { name: "Leonardo AI", category: "Image Generation", summary: "AI image generation platform for production-ready assets.", pricingType: "free", pricing: "Free credits; paid plans", bestFor: "Designers and game/asset creators", useCases: ["Asset creation", "Concept images", "Marketing visuals", "Styles"], specs: ["Model options", "Canvas tools", "Credit usage"], features: ["Prompt generation", "Style presets", "Image editing"], url: "https://leonardo.ai", badge: "Assets" },
  { name: "Ideogram", category: "Image Generation", summary: "Text-to-image platform with strong text rendering in images.", pricingType: "free", pricing: "Free and paid tiers", bestFor: "Posters, logos, text-heavy visuals", useCases: ["Logo ideas", "Posters", "Social images", "Brand concepts"], specs: ["Text rendering focus", "Style controls", "Web platform"], features: ["Prompt generation", "Variation tools", "Design output"], url: "https://ideogram.ai", badge: "Typography" },
  { name: "DALL-E", category: "Image Generation", summary: "Image generation model for prompt-based visuals.", pricingType: "paid", pricing: "Included in platform/API usage", bestFor: "General image generation", useCases: ["Illustrations", "Concept visuals", "Content images", "Creative ideation"], specs: ["Model-based generation", "API options", "Prompt editing"], features: ["Image creation", "Style variation", "Iterative prompts"], url: "https://openai.com/dall-e", badge: "Model" },
  { name: "Stable Diffusion", category: "Image Generation", summary: "Open ecosystem for AI image generation models.", pricingType: "free", pricing: "Open model + hosted services vary", bestFor: "Customizable/open image workflows", useCases: ["Local generation", "Custom models", "Creative pipelines", "Research"], specs: ["Open model family", "Self-host options", "Community tooling"], features: ["Fine-tuning", "Control tools", "Wide ecosystem"], url: "https://stability.ai", badge: "Open" },

  { name: "Runway", category: "Video", summary: "AI video generation and editing suite.", pricingType: "paid", pricing: "Free trial options; paid tiers", bestFor: "AI video creation", useCases: ["Text-to-video", "Editing", "Motion graphics", "Post-production"], specs: ["Cloud rendering", "Gen video models", "Project collaboration"], features: ["Inpainting", "Style transfer", "Timeline editing"], url: "https://runwayml.com", badge: "Video" },
  { name: "Synthesia", category: "Video", summary: "Avatar-based video creation from scripts.", pricingType: "paid", pricing: "Personal and enterprise plans", bestFor: "Training and explainer videos", useCases: ["Onboarding", "L&D", "Localization", "Product explainers"], specs: ["Avatar library", "Language support", "Templates"], features: ["Script-to-video", "Branding", "Collaboration"], url: "https://www.synthesia.io", badge: "Training" },
  { name: "HeyGen", category: "Video", summary: "AI avatar and translation video creation platform.", pricingType: "paid", pricing: "Free trial and subscription plans", bestFor: "Marketing and localization videos", useCases: ["Avatar videos", "Dubbing", "Sales videos", "Tutorials"], specs: ["Avatar/voice tools", "Language support", "Web editor"], features: ["Face/voice localization", "Templates", "Brand controls"], url: "https://www.heygen.com", badge: "Avatars" },
  { name: "Pika", category: "Video", summary: "Prompt-based AI video generation platform.", pricingType: "free", pricing: "Free and paid plans", bestFor: "Short-form creative video generation", useCases: ["Text-to-video", "Social clips", "Creative visuals", "Motion ideas"], specs: ["Prompt-driven", "Web-based generation", "Model updates"], features: ["Video generation", "Style controls", "Iterative edits"], url: "https://pika.art", badge: "Short Video" },
  { name: "Luma", category: "Video", summary: "AI video and 3D generation platform.", pricingType: "paid", pricing: "Free and subscription usage", bestFor: "3D and cinematic visual generation", useCases: ["Video generation", "3D capture", "Creative scenes", "Brand visuals"], specs: ["Generative video models", "3D workflows", "Web tools"], features: ["Scene generation", "Camera-style output", "Creative controls"], url: "https://lumalabs.ai", badge: "3D + Video" },
  { name: "Descript", category: "Video", summary: "AI audio/video editor focused on editing via text.", pricingType: "free", pricing: "Free and paid creator/business plans", bestFor: "Podcasts and video editing", useCases: ["Podcast editing", "Video editing", "Captions", "Voice cleanup"], specs: ["Text-based editor", "Studio tools", "Collaboration"], features: ["Overdub", "Filler removal", "Transcription"], url: "https://www.descript.com", badge: "Editing" },
  { name: "OpusClip", category: "Video", summary: "Turns long videos into short social clips using AI.", pricingType: "free", pricing: "Free and paid plans", bestFor: "Social media repurposing", useCases: ["Clip extraction", "Shorts", "Captions", "Publishing"], specs: ["Auto clipping", "Social optimization", "Cloud workflow"], features: ["Highlight detection", "Auto captions", "Format conversion"], url: "https://www.opus.pro", badge: "Repurpose" },
  { name: "VEED", category: "Video", summary: "Online video editor with AI generation and editing tools.", pricingType: "free", pricing: "Free and paid plans", bestFor: "Browser-based video workflows", useCases: ["Captions", "Editing", "Social videos", "Marketing content"], specs: ["Web editor", "AI tools", "Team collaboration"], features: ["Subtitle generation", "Voice tools", "Templates"], url: "https://www.veed.io", badge: "Web Editor" },

  { name: "ElevenLabs", category: "Audio", summary: "AI voice generation and dubbing platform.", pricingType: "free", pricing: "Free tier; usage-based paid", bestFor: "Voiceovers and localization", useCases: ["Narration", "Audiobooks", "Dubbing", "Voice cloning"], specs: ["Voice library", "API access", "Multilingual support"], features: ["Text-to-speech", "Speech-to-speech", "Voice cloning"], url: "https://elevenlabs.io", badge: "Voice" },
  { name: "Murf", category: "Audio", summary: "AI voiceover studio for business and media content.", pricingType: "paid", pricing: "Paid subscription plans", bestFor: "Corporate voiceover production", useCases: ["Training voiceovers", "Ads", "Explainer narration", "Presentations"], specs: ["Voice library", "Studio editing", "Team features"], features: ["TTS studio", "Voice customization", "Project collaboration"], url: "https://murf.ai", badge: "Voiceover" },
  { name: "Speechify", category: "Audio", summary: "Text-to-speech platform for listening to documents and content.", pricingType: "free", pricing: "Free tier; premium plans", bestFor: "Listening-based productivity", useCases: ["Read documents", "Learning", "Accessibility", "Article listening"], specs: ["Multi-platform", "Voice options", "Document import"], features: ["Natural voices", "Speed control", "Cross-device sync"], url: "https://speechify.com", badge: "TTS" },
  { name: "Suno", category: "Audio", summary: "AI music generation platform from text prompts.", pricingType: "free", pricing: "Free credits; paid plans", bestFor: "Song prototyping and creative music", useCases: ["Song generation", "Music ideation", "Background tracks", "Creative experiments"], specs: ["Prompt-based music", "Credit model", "Web app"], features: ["Song generation", "Style control", "Iterative creation"], url: "https://suno.com", badge: "Music" },
  { name: "Udio", category: "Audio", summary: "AI music generation and composition platform.", pricingType: "free", pricing: "Free and paid usage tiers", bestFor: "Generating and iterating songs", useCases: ["Music drafts", "Creative tracks", "Audio content", "Composition ideas"], specs: ["Prompt-based generation", "Web platform", "Creative controls"], features: ["Song creation", "Iteration", "Style experimentation"], url: "https://www.udio.com", badge: "Gen Music" },

  { name: "Zapier AI", category: "Automation", summary: "Workflow automation with AI-assisted app orchestration.", pricingType: "free", pricing: "Free tier; paid automation plans", bestFor: "No-code business automation", useCases: ["Lead routing", "Data sync", "Support automation", "Ops workflows"], specs: ["Large app ecosystem", "Triggers/actions", "AI assistants"], features: ["Natural-language builders", "Multi-step workflows", "Tables/interfaces"], url: "https://zapier.com/ai", badge: "Automation" },
  { name: "Make", category: "Automation", summary: "Visual workflow automation platform with AI integrations.", pricingType: "free", pricing: "Free and paid operation-based plans", bestFor: "Visual automation building", useCases: ["App automation", "Data pipelines", "Business workflows", "Notifications"], specs: ["Scenario builder", "App connectors", "Scheduling"], features: ["Visual editor", "Advanced logic", "API modules"], url: "https://www.make.com", badge: "Visual Flows" },
  { name: "n8n", category: "Automation", summary: "Workflow automation platform with self-host and cloud options.", pricingType: "free", pricing: "Open source/self-host; cloud plans", bestFor: "Technical teams automating systems", useCases: ["Internal automations", "ETL", "Agent workflows", "Integrations"], specs: ["Self-host support", "Code+no-code", "Node-based flows"], features: ["Custom nodes", "Webhooks", "AI workflow support"], url: "https://n8n.io", badge: "Self-host" },
  { name: "Flowise", category: "Automation", summary: "Visual builder for LLM and agent workflows.", pricingType: "free", pricing: "Open source and hosted options", bestFor: "Building custom LLM pipelines", useCases: ["Chatbots", "RAG pipelines", "Agent chains", "Internal tools"], specs: ["Node-based builder", "LLM integrations", "Deploy options"], features: ["Visual orchestration", "Chain templates", "Extensibility"], url: "https://flowiseai.com", badge: "LLM Flow" },
  { name: "CrewAI", category: "Automation", summary: "Framework for orchestrating multi-agent AI workflows.", pricingType: "free", pricing: "Open source + commercial offerings", bestFor: "Developers building agent systems", useCases: ["Agent orchestration", "Task delegation", "Automation", "Research workflows"], specs: ["Agent framework", "Python-first", "Integration support"], features: ["Role-based agents", "Task pipelines", "Tool integration"], url: "https://www.crewai.com", badge: "Multi-Agent" },
  { name: "LangChain", category: "Automation", summary: "Framework for building LLM and agent applications.", pricingType: "free", pricing: "Open source + platform services", bestFor: "Developers building production AI apps", useCases: ["RAG", "Tool-calling apps", "Agents", "Pipelines"], specs: ["Library ecosystem", "Observability stack", "Deployment tooling"], features: ["Chain abstractions", "Agent patterns", "Integrations"], url: "https://www.langchain.com", badge: "Framework" },

  { name: "Hugging Face", category: "Enterprise ML", summary: "Open ecosystem for model discovery, inference, and collaboration.", pricingType: "free", pricing: "Free community; paid endpoints/enterprise", bestFor: "ML teams and open-source builders", useCases: ["Model hosting", "Datasets", "Inference APIs", "Demos"], specs: ["Model Hub", "Spaces", "Endpoints"], features: ["Large model catalog", "Community ecosystem", "Deployment options"], url: "https://huggingface.co", badge: "Open Source" },
  { name: "Databricks Mosaic AI", category: "Enterprise ML", summary: "Enterprise platform for building and governing AI/ML systems.", pricingType: "enterprise", pricing: "Enterprise pricing", bestFor: "Data and ML teams at scale", useCases: ["Model development", "LLM apps", "Data pipelines", "Governance"], specs: ["Lakehouse integration", "Enterprise controls", "Model lifecycle"], features: ["Unified data+AI", "MLOps", "Governance"], url: "https://www.databricks.com/product/ai", badge: "Data + AI" },
  { name: "DataRobot", category: "Enterprise ML", summary: "Enterprise AI platform for modeling, deployment, and governance.", pricingType: "enterprise", pricing: "Enterprise contract pricing", bestFor: "Governed ML deployments", useCases: ["Predictive analytics", "MLOps", "Risk models", "Forecasting"], specs: ["Governance tooling", "Monitoring", "AutoML + custom workflows"], features: ["Observability", "Compliance controls", "Collaboration"], url: "https://www.datarobot.com", badge: "Governance" },
  { name: "AWS Bedrock", category: "Enterprise ML", summary: "Managed platform for foundation model access and app building.", pricingType: "enterprise", pricing: "Usage-based cloud pricing", bestFor: "AWS-native enterprise AI apps", useCases: ["GenAI apps", "Agents", "RAG", "Production deployment"], specs: ["Managed model access", "AWS integrations", "Security controls"], features: ["Model choice", "Guardrails", "Managed tooling"], url: "https://aws.amazon.com/bedrock/", badge: "Cloud AI" },
  { name: "Azure AI", category: "Enterprise ML", summary: "Microsoft cloud AI platform for model use and deployment.", pricingType: "enterprise", pricing: "Usage-based Azure pricing", bestFor: "Microsoft cloud enterprises", useCases: ["AI apps", "Model deployment", "RAG", "Enterprise copilots"], specs: ["Azure integrations", "Enterprise security", "Managed services"], features: ["Studio tools", "Model catalog", "Operational controls"], url: "https://azure.microsoft.com/en-us/products/ai-services", badge: "Cloud AI" },
  { name: "Google Vertex AI", category: "Enterprise ML", summary: "Google Cloud platform for model development and MLOps.", pricingType: "enterprise", pricing: "Usage-based cloud pricing", bestFor: "GCP data and AI teams", useCases: ["Model training", "Serving", "GenAI apps", "Pipelines"], specs: ["Managed ML stack", "Model garden", "MLOps tooling"], features: ["Training + serving", "Prompt tooling", "Governance"], url: "https://cloud.google.com/vertex-ai", badge: "Cloud AI" },
  { name: "IBM watsonx", category: "Enterprise ML", summary: "Enterprise AI platform with governance and lifecycle tools.", pricingType: "enterprise", pricing: "Enterprise pricing", bestFor: "Regulated and enterprise environments", useCases: ["Model development", "Governance", "AI assistants", "Risk management"], specs: ["AI lifecycle suite", "Governance layer", "Enterprise integrations"], features: ["Model ops", "Compliance support", "Data integration"], url: "https://www.ibm.com/watsonx", badge: "Regulated" },
  { name: "Snowflake Cortex", category: "Enterprise ML", summary: "AI capabilities integrated into Snowflake data platform.", pricingType: "enterprise", pricing: "Usage-based platform pricing", bestFor: "AI over enterprise data in Snowflake", useCases: ["SQL + AI workflows", "LLM features", "Data apps", "Analytics"], specs: ["Data platform-native", "Managed AI functions", "Security controls"], features: ["AI in data workflows", "Model functions", "Enterprise governance"], url: "https://www.snowflake.com/en/product/features/cortex/", badge: "Data Platform" },

  { name: "OpenAI API", category: "Model API", summary: "API platform for integrating AI models into applications.", pricingType: "paid", pricing: "Usage-based API pricing", bestFor: "Developers building AI features", useCases: ["Assistants", "Generation", "Vision", "Automation"], specs: ["API endpoints", "Model ecosystem", "Tool-calling"], features: ["Model variety", "SDK support", "Production integration"], url: "https://platform.openai.com", badge: "API" },
  { name: "Anthropic API", category: "Model API", summary: "Model API access for Claude-based applications.", pricingType: "paid", pricing: "Usage-based API pricing", bestFor: "Teams integrating Claude models", useCases: ["Agent apps", "Summarization", "Coding", "RAG"], specs: ["API access", "Long-context support", "Safety controls"], features: ["Model tiers", "Tool use", "Enterprise options"], url: "https://www.anthropic.com/api", badge: "API" },
  { name: "Cohere", category: "Model API", summary: "Enterprise-focused LLM platform and APIs.", pricingType: "paid", pricing: "Usage and enterprise plans", bestFor: "Enterprise NLP and RAG applications", useCases: ["Search", "Summaries", "Assistants", "Classifications"], specs: ["API platform", "Enterprise deployment", "Security support"], features: ["LLM APIs", "Embeddings", "RAG tooling"], url: "https://cohere.com", badge: "Enterprise API" },
  { name: "Mistral AI", category: "Model API", summary: "Open-weight and hosted model offerings for developers.", pricingType: "paid", pricing: "API and enterprise offerings", bestFor: "Teams needing flexible model options", useCases: ["Assistants", "RAG", "Automation", "Private deployments"], specs: ["Model family", "Hosted APIs", "Open-weight options"], features: ["Flexible deployment", "Model performance options", "Developer tooling"], url: "https://mistral.ai", badge: "Open + API" },

  { name: "Futurepedia", category: "AI Directories", summary: "Large AI tool directory to discover thousands of tools.", pricingType: "free", pricing: "Directory access free", bestFor: "Broad AI tool discovery", useCases: ["Tool discovery", "Category browsing", "Trend spotting", "Comparisons"], specs: ["Large catalog", "Category filters", "Regular updates"], features: ["Directory browsing", "Tool pages", "Collections"], url: "https://www.futurepedia.io", badge: "Directory" },
  { name: "There's An AI For That", category: "AI Directories", summary: "Directory for discovering AI tools by specific use case.", pricingType: "free", pricing: "Directory access free", bestFor: "Finding niche AI tools quickly", useCases: ["Use-case search", "Tool discovery", "Category exploration", "Alternatives"], specs: ["Use-case indexing", "Large tool catalog", "Discovery filters"], features: ["Search by task", "Tool listings", "New tool discovery"], url: "https://theresanaiforthat.com", badge: "Directory" },
  { name: "Toolify", category: "AI Directories", summary: "AI tools listing platform with category-based exploration.", pricingType: "free", pricing: "Directory access free", bestFor: "Exploring many AI products in one place", useCases: ["Tool exploration", "Category scans", "Discovery", "Alternatives"], specs: ["Large index", "Category pages", "New listing feed"], features: ["Search and browse", "Trending tools", "Tool profiles"], url: "https://www.toolify.ai", badge: "Directory" }
];

const categorySelect = document.getElementById("category");
const pricingSelect = document.getElementById("pricing");
const searchInput = document.getElementById("search");
const toolGrid = document.getElementById("toolGrid");
const resultCount = document.getElementById("resultCount");
const template = document.getElementById("toolTemplate");

const sortedTools = [...tools].sort((a, b) => a.name.localeCompare(b.name));
const categories = [...new Set(sortedTools.map((tool) => tool.category))].sort();

for (const category of categories) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.append(option);
}

function includesSearch(tool, term) {
  const bucket = [
    tool.name,
    tool.category,
    tool.summary,
    tool.pricing,
    tool.bestFor,
    ...tool.useCases,
    ...tool.specs,
    ...tool.features
  ].join(" ").toLowerCase();

  return bucket.includes(term);
}

function filteredTools() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const pricing = pricingSelect.value;

  return sortedTools.filter((tool) => {
    const categoryPass = category === "all" || tool.category === category;
    const pricingPass = pricing === "all" || tool.pricingType === pricing;
    const searchPass = !term || includesSearch(tool, term);

    return categoryPass && pricingPass && searchPass;
  });
}

function createList(items) {
  const fragment = document.createDocumentFragment();

  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    fragment.append(li);
  }

  return fragment;
}

function renderTools() {
  const visibleTools = filteredTools();
  resultCount.textContent = String(visibleTools.length);
  toolGrid.innerHTML = "";

  if (!visibleTools.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No tools match this filter. Try another category or a broader search term.";
    toolGrid.append(empty);
    return;
  }

  visibleTools.forEach((tool, index) => {
    const node = template.content.cloneNode(true);

    node.querySelector(".category").textContent = tool.category;
    node.querySelector(".name").textContent = tool.name;
    node.querySelector(".badge").textContent = tool.badge;
    node.querySelector(".summary").textContent = tool.summary;
    node.querySelector(".pricing").textContent = tool.pricing;
    node.querySelector(".best-for").textContent = tool.bestFor;

    const useCases = node.querySelector(".use-cases");
    tool.useCases.forEach((useCase) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = useCase;
      useCases.append(chip);
    });

    node.querySelector(".specs").append(createList(tool.specs));
    node.querySelector(".features").append(createList(tool.features));

    const link = node.querySelector(".visit-link");
    link.href = tool.url;
    link.textContent = `Visit ${tool.name}`;

    const card = node.querySelector(".tool-card");
    card.style.animationDelay = `${index * 15}ms`;

    toolGrid.append(node);
  });
}

searchInput.addEventListener("input", renderTools);
categorySelect.addEventListener("change", renderTools);
pricingSelect.addEventListener("change", renderTools);

renderTools();
