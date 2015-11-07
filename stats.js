


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>mrdoob/stats.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mrdoob/stats.js" name="twitter:title" /><meta content="stats.js - JavaScript Performance Monitor" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/97088?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/97088?v=3&amp;s=400" property="og:image" /><meta content="mrdoob/stats.js" property="og:title" /><meta content="https://github.com/mrdoob/stats.js" property="og:url" /><meta content="stats.js - JavaScript Performance Monitor" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTUxNjQ4NTA6ZDRmZWVlYWI3Zjg2ZjgzOTM3MjNmZWM1NGNhMzdmNWU6ZTFhNTcyZTQ4YTBhMjI3YWE0ODM3Yzg2MjMwNDhiMTcxNzlhNmMxMjhkMGYxZWMxOTRjZWFhYmQyNzQ5YTMwZA==--96f24ec5c4466cab01e3c6b828a2b526688326c1">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="B165F57A:09A9:886C2C0:563D3736" name="octolytics-dimension-request_id" /><meta content="15164850" name="octolytics-actor-id" /><meta content="Metlica" name="octolytics-actor-login" /><meta content="8a34e1f1974fb2d3f24964c433fa3420967ddba25939cd563a49878a8c5f2c90" name="octolytics-actor-hash" />

<meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Metlica">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="94fc4ac81375aef73465991c866560f773d7eea5" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-e1c13e7309dc7f723b21b2afc0a6ee6a9e8e5978fe25dccb3251d923cab472df.css" integrity="sha256-4cE+cwncf3I7IbKvwKbuap6OWXj+JdzLMlHZI8q0ct8=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-8660e134f8078fe75046e2c8cf09a2fd65d94446a9c3d11ecf672cb4c5842b6a.css" integrity="sha256-hmDhNPgHj+dQRuLIzwmi/WXZREapw9Eez2cstMWEK2o=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="bfd96d846aa5a35d072709105fddd787">

      
  <meta name="description" content="stats.js - JavaScript Performance Monitor">
  <meta name="go-import" content="github.com/mrdoob/stats.js git https://github.com/mrdoob/stats.js.git">

  <meta content="97088" name="octolytics-dimension-user_id" /><meta content="mrdoob" name="octolytics-dimension-user_login" /><meta content="600637" name="octolytics-dimension-repository_id" /><meta content="mrdoob/stats.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="600637" name="octolytics-dimension-repository_network_root_id" /><meta content="mrdoob/stats.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mrdoob/stats.js/commits/master.atom" rel="alternate" title="Recent Commits to stats.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mrdoob/stats.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/mrdoob/stats.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:Metlica"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="mrdoob/stats.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/mrdoob/stats.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/Metlica"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Metlica" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/15164850?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">Metlica</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/Metlica" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="amheNpk+ZTkNicS6qinSr5zxUBihGucg9rv7FjW0lSepnMfn/p2Uo5MlH4ymLLRPyfmMFuLwuQUCLNiizk759Q==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XKIGBeAhANy5S4HEHT39w+5LZyN7nLHuxpMwmOiJT3l93e99uf9smEZwLPs1gZMUMVBPtpujEeAijzO6xzFS1Q==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="600637" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/mrdoob/stats.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <span class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/mrdoob/stats.js/watchers">
            118
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mrdoob/stats.js/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ywp7Dakmg4Lxva/I3iTIsaD3g3axO0wLiWA2fU/+HBWGrrx0kXC8085s6MX23n6REKW1tuRuHxeLeGkG2X+V5g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar mrdoob/stats.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/mrdoob/stats.js/stargazers">
          2,685
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mrdoob/stats.js/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8g09ZvolXFOHczh6judC8SWwFqUh4m2f+RnozK+u1YFmWawqfl7eKKuxv7nWzI5VkObkY2pqNSIxvL9I2shygg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star mrdoob/stats.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/mrdoob/stats.js/stargazers">
          2,685
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mrdoob/stats.js/fork" class="btn-with-count" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LF4sd1GgHGJt7ybjbtyWiu1Ck1Hve1JFc+RScON3DOX6clLpNQIprBKKaEbPF1kv1brbUu7EgCp+CQNDyjiS8Q==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of mrdoob/stats.js to your account"
                aria-label="Fork your own copy of mrdoob/stats.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/mrdoob/stats.js/network" class="social-count">
      351
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/mrdoob" class="url fn" itemprop="url" rel="author"><span itemprop="title">mrdoob</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/mrdoob/stats.js" data-pjax="#js-repo-pjax-container">stats.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/mrdoob/stats.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/mrdoob/stats.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mrdoob/stats.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/mrdoob/stats.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mrdoob/stats.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/mrdoob/stats.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /mrdoob/stats.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/mrdoob/stats.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /mrdoob/stats.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/mrdoob/stats.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /mrdoob/stats.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/mrdoob/stats.js.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3 class="text-small text-muted"><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:mrdoob/stats.js.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/mrdoob/stats.js" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aAbRz3isDtq/iLW94UOxnIMBsi2L301bnIhRHz2nEtPaYlYlzbOReubS/lFTIOrQ8ajDVrcx2WkegRZ2urHsXQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="X4tme10yWkFMITWT4ZM5aEaL2m3CG+5GYlqlb4L2nsoOaUj3OrV62iG6vcamB7tSPsp+8xHLefTrbFIWgw2DdA==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OfHUMW1iHSkURY/l32EeUEezkwRyAKn0Buu8kB5sYwOKKuEx+N/a4eq0j/5uDOB5LDey5q6Bat8hMTJsLuASow==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save mrdoob/stats.js to your computer and use it in GitHub Desktop." aria-label="Save mrdoob/stats.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/mrdoob/stats.js/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of mrdoob/stats.js as a zip file"
                 title="Download the contents of mrdoob/stats.js as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          
<span id="js-show-full-navigation"></span>

  <div class="repository-meta js-details-container ">
    <div class="repository-description">
      JavaScript Performance Monitor
    </div>


</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/mrdoob/stats.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              107
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/mrdoob/stats.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/mrdoob/stats.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            13
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/mrdoob/stats.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      11
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/mrdoob/stats.js/search?l=html">
                <span class="color-block language-color" style="background-color:#e44b23;"></span>
                <span class="lang">HTML</span>
                <span class="percent">62.9%</span>
              </a>
          </li>
          <li>
              <a href="/mrdoob/stats.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">34.1%</span>
              </a>
          </li>
          <li>
              <a href="/mrdoob/stats.js/search?l=python">
                <span class="color-block language-color" style="background-color:#3572A5;"></span>
                <span class="lang">Python</span>
                <span class="percent">3.0%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="HTML 62.9%" style="width:62.9%; background-color:#e44b23;" itemprop="keywords">HTML</span>
    <span class="language-color" aria-label="JavaScript 34.1%" style="width:34.1%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="Python 3.0%" style="width:3.0%; background-color:#3572A5;" itemprop="keywords">Python</span>
  </div>

<include-fragment src="/mrdoob/stats.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

  <div class="file-navigation in-mid-page">
  <a href="/mrdoob/stats.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files"
        data-ga-click="Repository, find file, location:repo overview">
    <span class="octicon octicon-list-unordered"></span>
  </a>


    <a href="/mrdoob/stats.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mrdoob/stats.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r14"
                 data-name="r14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r14">r14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r13"
                 data-name="r13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r13">r13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r12"
                 data-name="r12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r12">r12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r11"
                 data-name="r11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r11">r11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r10"
                 data-name="r10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r10">r10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r9"
                 data-name="r9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r9">r9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r8"
                 data-name="r8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r8">r8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r7"
                 data-name="r7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r7">r7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r6"
                 data-name="r6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r6">r6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r5"
                 data-name="r5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r5">r5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r4"
                 data-name="r4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r4">r4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r3"
                 data-name="r3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r3">r3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/stats.js/tree/r2"
                 data-name="r2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2">r2</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


  <div class="breadcrumb"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/stats.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">stats.js</span></a></span></span><span class="separator">/</span>
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mrdoob/stats.js/new/master" class="js-new-blob-form inline-form" data-form-nonce="94fc4ac81375aef73465991c866560f773d7eea5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/Ei8XAuYClkvrzFJM7nSRKwPSB756cqqLGrcYtX95DyrbyKYod8a5rl5e57CaA5vZgCrUigNYLV85z2HrsOksA==" /></div>
    <button class="btn-link tooltipped tooltipped-e" type="submit"
      data-disable-with="working…" aria-label="Fork this project and create a new file">
      <span class="js-new-blob-submit octicon octicon-plus"></span>
    </button>
</form></div>
</div>





  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/mrdoob/stats.js/commit/6b5cba034e5a30941b01da3fa785da49338fa676" data-pjax>
        6b5cba0
      </a>
      <time datetime="2015-08-07T14:29:06Z" is="relative-time">Aug 7, 2015</time>
    </span>


    <span class="commit-author-section">
      <img alt="@mrdoob" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/97088?v=3&amp;s=40" width="20" />
      <a href="/mrdoob" class="user-mention" rel="author">mrdoob</a>
    </span>

        <a href="/mrdoob/stats.js/commit/6b5cba034e5a30941b01da3fa785da49338fa676" class="message" data-pjax="true" title="Merge pull request #48 from lmagedanz/master

Added missing semicolon.">Merge pull request</a> <a href="https://github.com/mrdoob/stats.js/pull/48" class="issue-link" title="Added missing semicolon.">#48</a> <a href="/mrdoob/stats.js/commit/6b5cba034e5a30941b01da3fa785da49338fa676" class="message" data-pjax="true" title="Merge pull request #48 from lmagedanz/master

Added missing semicolon.">from lmagedanz/master</a>
          <span class="hidden-text-expander inline">
            <a href="#" class="js-details-target">…</a>
          </span>
    </span>

      <div class="commit-desc"><pre class="text-small">Added missing semicolon.</pre></div>
  </div>


<div class="file-wrap">
  <a href="/mrdoob/stats.js/tree/6b5cba034e5a30941b01da3fa785da49338fa676" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/tree/master/build" class="js-directory-link js-navigation-open" id="b0da275520918e23dd615e2a747528f1-9955ba45f8ea3ec363df529a88a1ac15653caefa" title="build">build</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/d869e3f61c9796de726e8b8c12568225e7e84d2f" class="message" data-pjax="true" title="Removed unneeded check.">Removed unneeded check.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-19T14:09:30Z" is="time-ago">Jun 19, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/tree/master/examples" class="js-directory-link js-navigation-open" id="bfebe34154a0dfd9fc7b447fc9ed74e9-d41b5744263ba5409a94b66c30861cd6ffa92f76" title="examples">examples</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/3a78df7287c6ef8aad1e1cabcfa56a9e159734c8" class="message" data-pjax="true" title="Fixed mem mode.">Fixed mem mode.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-07T21:13:54Z" is="time-ago">Jun 7, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/tree/master/files" class="js-directory-link js-navigation-open" id="45b963397aa40d4a0063e0d85e4fe7a1-589d7ebeca574bdb2d70f07bbd3c2b726dfbaf9d" title="files">files</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/98fedecd0d7b92b3cf8026ae2f2fc62856f46438" class="message" data-pjax="true" title="Moved screenshots to this repo.">Moved screenshots to this repo.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-07T21:13:31Z" is="time-ago">Jun 7, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/tree/master/src" class="js-directory-link js-navigation-open" id="25d902c24283ab8cfbac54dfa101ad31-4c508db4aa30a2964848c9f750d0b3631dca33d1" title="src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/e07cee51c740b5bcfd77adecb6a74fc50ad58098" class="message" data-pjax="true" title="Added missing semicolon.">Added missing semicolon.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-08-07T07:34:52Z" is="time-ago">Aug 7, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/tree/master/utils" class="js-directory-link js-navigation-open" id="2b3583e6e17721c54496bd04e57a0c15-34f4422b5c91e0cbe9838c4467f7ce9624f9cad5" title="utils">utils</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/5c3a0b1efbee10e1b89e19e738a6b30b5aabd124" class="message" data-pjax="true" title="Updated closure compiler.">Updated closure compiler.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-06T12:00:38Z" is="time-ago">Jun 6, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/blob/master/LICENSE" class="js-directory-link js-navigation-open" id="9879d6db96fd29134fc802214163b95a-97eb23299a2287a0b6e4d7383fbc2e120b45e3fc" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/d5f5aa40a24a6d5667ecbcef20c13c75cf236bcd" class="message" data-pjax="true" title="r10">r10</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2012-05-09T23:08:39Z" is="time-ago">May 10, 2012</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/blob/master/README.md" class="js-directory-link js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-7fd69fec0883a9b8ef2c5a1410c41322aa564423" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/98fedecd0d7b92b3cf8026ae2f2fc62856f46438" class="message" data-pjax="true" title="Moved screenshots to this repo.">Moved screenshots to this repo.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-07T21:13:31Z" is="time-ago">Jun 7, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/blob/master/bower.json" class="js-directory-link js-navigation-open" id="0a08a7565aba4405282251491979bb6b-81b4301b6ba57ab930123c556ad669bf1d0f559a" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/8e5413642371af2eae015fe08e7bcbf107ee6ae5" class="message" data-pjax="true" title="Remove moot `version` property from bower.json

Per bower/bower.json-spec@a325da3">Remove moot `version` property from bower.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-11T01:31:03Z" is="time-ago">Jun 10, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mrdoob/stats.js/blob/master/package.json" class="js-directory-link js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-abf9aab9df6ba51f4307cd5b53549e2ce4be2afe" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mrdoob/stats.js/commit/cca2c2a1826bffddff3a24f753117be8e303ff4d" class="message" data-pjax="true" title="r14">r14</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-06T17:26:45Z" is="time-ago">Jun 6, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-statsjs" class="anchor" href="#statsjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>stats.js</h1>

<h4><a id="user-content-javascript-performance-monitor" class="anchor" href="#javascript-performance-monitor" aria-hidden="true"><span class="octicon octicon-link"></span></a>JavaScript Performance Monitor</h4>

<p>This class provides a simple info box that will help you monitor your code performance.</p>

<ul>
<li><strong>FPS</strong> Frames rendered in the last second. The higher the number the better.</li>
<li><strong>MS</strong> Milliseconds needed to render a frame. The lower the number the better.</li>
<li><strong>MB</strong> MBytes of allocated memory. (Run Chrome with <code>--enable-precise-memory-info</code>)</li>
</ul>

<h3><a id="user-content-screenshots" class="anchor" href="#screenshots" aria-hidden="true"><span class="octicon octicon-link"></span></a>Screenshots</h3>

<p><a href="https://camo.githubusercontent.com/c43cc27b9c1d99f09f26922eac811ac175fb6aff/68747470733a2f2f63646e2e7261776769742e636f6d2f6d72646f6f622f73746174732e6a732f6d61737465722f66696c65732f6670732e706e67" target="_blank"><img src="https://camo.githubusercontent.com/c43cc27b9c1d99f09f26922eac811ac175fb6aff/68747470733a2f2f63646e2e7261776769742e636f6d2f6d72646f6f622f73746174732e6a732f6d61737465722f66696c65732f6670732e706e67" alt="fps.png" data-canonical-src="https://cdn.rawgit.com/mrdoob/stats.js/master/files/fps.png" style="max-width:100%;"></a>
<a href="https://camo.githubusercontent.com/90bad6583e9616d36a26f662ef8ec63932eb3644/68747470733a2f2f63646e2e7261776769742e636f6d2f6d72646f6f622f73746174732e6a732f6d61737465722f66696c65732f6d732e706e67" target="_blank"><img src="https://camo.githubusercontent.com/90bad6583e9616d36a26f662ef8ec63932eb3644/68747470733a2f2f63646e2e7261776769742e636f6d2f6d72646f6f622f73746174732e6a732f6d61737465722f66696c65732f6d732e706e67" alt="ms.png" data-canonical-src="https://cdn.rawgit.com/mrdoob/stats.js/master/files/ms.png" style="max-width:100%;"></a>
<a href="https://camo.githubusercontent.com/351c1dc3811082030550839f21f0b692f66bb34c/68747470733a2f2f63646e2e7261776769742e636f6d2f6d72646f6f622f73746174732e6a732f6d61737465722f66696c65732f6d622e706e67" target="_blank"><img src="https://camo.githubusercontent.com/351c1dc3811082030550839f21f0b692f66bb34c/68747470733a2f2f63646e2e7261776769742e636f6d2f6d72646f6f622f73746174732e6a732f6d61737465722f66696c65732f6d622e706e67" alt="mb.png" data-canonical-src="https://cdn.rawgit.com/mrdoob/stats.js/master/files/mb.png" style="max-width:100%;"></a></p>

<h3><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> stats <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Stats</span>();
stats.setMode( <span class="pl-c1">1</span> ); <span class="pl-c">// 0: fps, 1: ms, 2: mb</span>

<span class="pl-c">// align top-left</span>
stats.domElement.<span class="pl-c1">style</span>.position <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>absolute<span class="pl-pds">'</span></span>;
stats.domElement.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>0px<span class="pl-pds">'</span></span>;
stats.domElement.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>0px<span class="pl-pds">'</span></span>;

<span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">appendChild</span>( stats.domElement );

<span class="pl-k">var</span> <span class="pl-en">update</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {

    stats.begin();

    <span class="pl-c">// monitored code goes here</span>

    stats.end();

    requestAnimationFrame( update );

};

requestAnimationFrame( update );</pre></div>

<h3><a id="user-content-bookmarklet" class="anchor" href="#bookmarklet" aria-hidden="true"><span class="octicon octicon-link"></span></a>Bookmarklet</h3>

<p>You can add this code to any page using the following bookmarklet:</p>

<div class="highlight highlight-source-js"><pre>javascript<span class="pl-k">:</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> script<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">'</span>script<span class="pl-pds">'</span></span>);<span class="pl-c1">script</span>.<span class="pl-en">onload</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> stats<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Stats</span>();stats.domElement.<span class="pl-c1">style</span>.cssText<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">'</span>position:fixed;left:0;top:0;z-index:10000<span class="pl-pds">'</span></span>;<span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">appendChild</span>(stats.domElement);requestAnimationFrame(<span class="pl-k">function</span> <span class="pl-en">loop</span>(){stats.update();requestAnimationFrame(loop)});};script.src<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">'</span>//rawgit.com/mrdoob/stats.js/master/build/stats.min.js<span class="pl-pds">'</span></span>;<span class="pl-c1">document</span>.head.<span class="pl-c1">appendChild</span>(script);})()</pre></div>
</article>
  </div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.09493s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-Ln/D0mSiCOE4PehbgVN5vsz/VsH5d3FFFdTKx4IO7z4=" src="https://assets-cdn.github.com/assets/frameworks-2e7fc3d264a208e1383de85b815379beccff56c1f977714515d4cac7820eef3e.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-47bA1zJOdboD+FvZpYaX4fsMAtEMkyaAXVEfpstqDSE=" src="https://assets-cdn.github.com/assets/github-e3b6c0d7324e75ba03f85bd9a58697e1fb0c02d10c9326805d511fa6cb6a0d21.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

