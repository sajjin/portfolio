import phoneDiscordLarge from '~/assets/iphone-11-screen.png';
import phoneDiscord from '~/assets/iphone-11-screen.png';
import pollDiscordLarge from '~/assets/pollmaker.png';
import pollDiscord from '~/assets/pollmaker.png';
import sliceBackgroundLarge from '~/assets/discord-background.png';
import sliceBackground from '~/assets/discord-background.png';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, lazy, Suspense, useState } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Loader } from '~/components/loader';
import { deviceModels } from '~/components/model/device-models';
import { useTheme } from '~/components/theme-provider';
import katakana from './katakana.svg';
import styles from './discord-bot.module.css';

const title = 'Discord Bots';
const description =
  'This project was made because I wanted useful bots that would automate tasks for my Discord server, from moderation to music playback, and making custom polls easily and quickly.';
const roles = ['Bot Development', 'Community Management', 'User Support'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const Model = lazy(() => import('~/components/model').then(module => ({ default: module.Model })));

export const DiscordBots = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  function renderKatakana(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible && modelLoaded}
        data-light={theme === 'light'}
        style={{ opacity: svgOpacity }}
        className={styles.svg}
        data-device={device}
        viewBox="0 0 751 136"
      >
        <use href={`${katakana}#katakana-project`} />
      </svg>
    );
  }

  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection>
        <ProjectSectionColumns padding="top">
            <div className={styles.model}>
              {renderKatakana('laptop', true)}
              <Suspense fallback={<Loader center data-visible={true} />}>
                <Model 
                  models={[{
                    ...deviceModels.laptop,
                    position: { x: 0, y: -.5, z: 10 },
                    animation: 'SpringUp',
                    texture: {
                      placeholder: pollDiscord,
                      src: pollDiscord,
                      srcSet: `${pollDiscord} 800w, ${pollDiscordLarge} 1920w`,
                      sizes: laptopSizes
                    }
                  }]}
                  alt="3D model showing Discord bot interface"
                  cameraPosition={{ x: 0, y: 0, z: 16 }}
                  showDelay={300}
                  onLoad={() => setModelLoaded(true)}
                  show={true}
                />
              </Suspense>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.armor}>
              <Suspense fallback={<Loader center data-visible={true} />}>
                <Model 
                  models={[{
                    ...deviceModels.iphone_11,
                    position: { x: 0, y: 0, z: 8 },
                    animation: 'SpringUp',
                    texture: {
                      placeholder: phoneDiscord,
                      src: phoneDiscord,
                      srcSet: `${phoneDiscord} 800w, ${phoneDiscordLarge} 1920w`,
                      sizes: phoneSizes
                    }
                  }]}
                  alt="3D model showing Discord bot interface"
                  cameraPosition={{ x: 0, y: 0, z: 16 }}
                  showDelay={300}
                  onLoad={() => setModelLoaded(true)}
                  show={true}
                />
              </Suspense>
            </div>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>How it&#39;s made</ProjectSectionHeading>
              <ProjectSectionText>
                These applications were made using the discord.js library in
                JavaScript and python. The bots are hosted on a private server I own 24/7 so
                they are always online. The bots use a variety of APIs to
                provide their functionality, such as the YouTube API for music
                playback and the OpenAI API for generating images and text.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Bots</ProjectSectionHeading>
              <ProjectSectionText>
                I have made multiple bots for my Discord server, some of the most popular ones are:
                <ul>
                  <li>
                    Music Bot - A bot that plays music from YouTube and other sources.
                  </li>
                  <li>
                     Snack Bot - A bot that picks a random user from the server.
                  </li>
                  <li>
                    Utility Bot - A bot that provides various utility functions, such as reminders and polls.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                {/* Background image placeholder */}
              </div>
              <div className={styles.gridForeground}>
                {/* Foreground image placeholder */}
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Functions</ProjectSectionHeading>
              <ProjectSectionText>
                The bots have a variety of functions, some of the most popular ones are:
                <ul>
                  <li>
                    Music Playback - Play, pause, skip, and queue songs from YouTube and other sources.
                  </li>
                  <li>
                    Snack Picker - Picks a random user from the server with decreasing chances of picking the same user with types of snacks to bring built into the commands.
                  </li>
                  <li>
                    Utility - Create polls, set reminders, and provide server statistics.
                  </li>
                </ul>
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};