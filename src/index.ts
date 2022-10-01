import { ActivityType, Client, GatewayIntentBits, Collection } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
  console.log(`logged in as ${client?.user?.tag}`);
  client?.user?.setPresence({ status: 'idle' });
  client?.user?.setActivity(`${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? 's' : ''}`, { type: ActivityType.Watching });
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === 'ping') message.channel.send('pong');
});

client.login(process.env.BOT_TOKEN);
