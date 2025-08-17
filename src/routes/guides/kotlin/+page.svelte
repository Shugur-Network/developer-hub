<script>
  import { Copy, CheckCircle, XCircle } from 'lucide-svelte';
  import { kotlinGuide } from '$lib/content/guides';
  import { getIcon } from '$lib/utils/icons';
  
  let copied = false;
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>Kotlin Guide - Nostr Development with Shugur</title>
  <meta name="description" content="Build modern Android apps and multiplatform Nostr applications with Kotlin. Learn to use nostr-tools with Kotlin and coroutines." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-orange-600 to-purple-600 text-white py-16">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <svelte:component this={getIcon(kotlinGuide.heroIcon)} class="h-6 w-6 text-white" />
      </div>
      <span class="text-lg">Android & Multiplatform</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-display tracking-tight mb-6">
      {kotlinGuide.title}
    </h1>
    <p class="text-xl opacity-90 mb-8">
      {kotlinGuide.description}
    </p>
    
    <div class="flex flex-wrap gap-3">
      {#each kotlinGuide.tags as tag}
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Table of Contents -->
<section class="py-8 bg-white border-b">
  <div class="mx-auto max-w-4xl px-4">
    <h2 class="text-lg font-semibold mb-4">What you'll learn:</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      {#each Object.entries(kotlinGuide.sections) as [key, section]}
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
          <span>{section.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Setup and Installation -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(kotlinGuide.sections.setup.icon)} class="h-8 w-8 text-orange-600" />
      <h2 class="text-2xl font-display">{kotlinGuide.sections.setup.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {kotlinGuide.sections.setup.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">build.gradle.kts</span>
        <button 
          on:click={() => copyToClipboard(`dependencies {
    implementation("com.github.nostr-sdk:nostr-sdk:0.1.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.0")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.5.0")
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`dependencies {
    implementation("com.github.nostr-sdk:nostr-sdk:0.1.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.0")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.5.0")
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Basic Connection -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(kotlinGuide.sections.basicConnection.icon)} class="h-8 w-8 text-orange-600" />
      <h2 class="text-2xl font-display">{kotlinGuide.sections.basicConnection.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {kotlinGuide.sections.basicConnection.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Kotlin</span>
        <button 
          on:click={() => copyToClipboard(`import kotlinx.coroutines.*
import nostr.sdk.*

class NostrClient {
    private val relay = Relay("wss://shu01.shugur.net")
    
    suspend fun connect() {
        relay.connect()
        println("Connected to Shugur relay!")
    }
    
    fun disconnect() {
        relay.disconnect()
    }
}

// Usage
fun main() = runBlocking {
    val client = NostrClient()
    client.connect()
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import kotlinx.coroutines.*
import nostr.sdk.*

class NostrClient {
    private val relay = Relay("wss://shu01.shugur.net")
    
    suspend fun connect() {
        relay.connect()
        println("Connected to Shugur relay!")
    }
    
    fun disconnect() {
        relay.disconnect()
    }
}

// Usage
fun main() = runBlocking {
    val client = NostrClient()
    client.connect()
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Working with Events -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(kotlinGuide.sections.events.icon)} class="h-8 w-8 text-orange-600" />
      <h2 class="text-2xl font-display">{kotlinGuide.sections.events.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {kotlinGuide.sections.events.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Kotlin</span>
        <button 
          on:click={() => copyToClipboard(`import nostr.sdk.*
import kotlinx.serialization.Serializable

@Serializable
data class NostrEvent(
    val id: String,
    val pubkey: String,
    val created_at: Long,
    val kind: Int,
    val tags: List<List<String>>,
    val content: String,
    val sig: String
)

class EventManager {
    suspend fun createTextNote(content: String, privateKey: String): NostrEvent {
        val event = NostrEvent(
            id = "",
            pubkey = derivePublicKey(privateKey),
            created_at = System.currentTimeMillis() / 1000,
            kind = 1,
            tags = emptyList(),
            content = content,
            sig = ""
        )
        
        // Sign the event
        return signEvent(event, privateKey)
    }
    
    private fun derivePublicKey(privateKey: String): String {
        // Implementation for deriving public key
        return "derived_public_key"
    }
    
    private fun signEvent(event: NostrEvent, privateKey: String): NostrEvent {
        // Implementation for signing event
        return event.copy(
            id = "calculated_hash",
            sig = "calculated_signature"
        )
    }
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import nostr.sdk.*
import kotlinx.serialization.Serializable

@Serializable
data class NostrEvent(
    val id: String,
    val pubkey: String,
    val created_at: Long,
    val kind: Int,
    val tags: List<List<String>>,
    val content: String,
    val sig: String
)

class EventManager {
    suspend fun createTextNote(content: String, privateKey: String): NostrEvent {
        val event = NostrEvent(
            id = "",
            pubkey = derivePublicKey(privateKey),
            created_at = System.currentTimeMillis() / 1000,
            kind = 1,
            tags = emptyList(),
            content = content,
            sig = ""
        )
        
        // Sign the event
        return signEvent(event, privateKey)
    }
    
    private fun derivePublicKey(privateKey: String): String {
        // Implementation for deriving public key
        return "derived_public_key"
    }
    
    private fun signEvent(event: NostrEvent, privateKey: String): NostrEvent {
        // Implementation for signing event
        return event.copy(
            id = "calculated_hash",
            sig = "calculated_signature"
        )
    }
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Android Development -->
<section class="py-16 bg-gray-50">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(kotlinGuide.sections.android.icon)} class="h-8 w-8 text-orange-600" />
      <h2 class="text-2xl font-display">{kotlinGuide.sections.android.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {kotlinGuide.sections.android.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Kotlin</span>
        <button 
          on:click={() => copyToClipboard(`import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.*
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val viewModel: NostrViewModel = viewModel()
            val uiState by viewModel.uiState.collectAsState()
            
            NostrApp(
                uiState = uiState,
                onConnect = { viewModel.connect() },
                onPublish = { content -> viewModel.publishNote(content) }
            )
        }
    }
}

@Composable
fun NostrApp(
    uiState: NostrUiState,
    onConnect: () -> Unit,
    onPublish: (String) -> Unit
) {
    Column {
        Button(onClick = onConnect) {
            Text("Connect to Relay")
        }
        
        when (uiState) {
            is NostrUiState.Connected -> {
                Text("Connected to Shugur relay!")
                // Show publish form
            }
            is NostrUiState.Error -> {
                Text("Error: Connection failed")
            }
            else -> {
                Text("Not connected")
            }
        }
    }
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.*
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val viewModel: NostrViewModel = viewModel()
            val uiState by viewModel.uiState.collectAsState()
            
            NostrApp(
                uiState = uiState,
                onConnect = { viewModel.connect() },
                onPublish = { content -> viewModel.publishNote(content) }
            )
        }
    }
}

@Composable
fun NostrApp(
    uiState: NostrUiState,
    onConnect: () -> Unit,
    onPublish: (String) -> Unit
) {
    Column {
        Button(onClick = onConnect) {
            Text("Connect to Relay")
        }
        
        when (uiState) {
            is NostrUiState.Connected -> {
                Text("Connected to Shugur relay!")
                // Show publish form
            }
            is NostrUiState.Error -> {
                Text("Error: Connection failed")
            }
            else -> {
                Text("Not connected")
            }
        }
    }
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Multiplatform -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-4xl px-4">
    <div class="flex items-center gap-3 mb-6">
      <svelte:component this={getIcon(kotlinGuide.sections.multiplatform.icon)} class="h-8 w-8 text-orange-600" />
      <h2 class="text-2xl font-display">{kotlinGuide.sections.multiplatform.title}</h2>
    </div>
    
    <p class="text-gray-600 mb-6">
      {kotlinGuide.sections.multiplatform.description}
    </p>
    
    <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-400">Kotlin</span>
        <button 
          on:click={() => copyToClipboard(`// Common module (shared between platforms)
expect class Platform() {
    val platform: String
}

// Android implementation
actual class Platform actual constructor() {
    actual val platform: String = "Android \${android.os.Build.VERSION.SDK_INT}"
}

// iOS implementation
actual class Platform actual constructor() {
    actual val platform: String = UIDevice.currentDevice.systemName + " " + UIDevice.currentDevice.systemVersion
}

// Shared Nostr client
class NostrClient {
    suspend fun connect(relayUrl: String) {
        // Platform-agnostic connection logic
    }
    
    suspend fun publish(event: NostrEvent) {
        // Platform-agnostic publishing logic
    }
}`)}
          class="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
        >
          <Copy class="h-3 w-3" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre class="text-sm overflow-x-auto"><code>{`// Common module (shared between platforms)
expect class Platform() {
    val platform: String
}

// Android implementation
actual class Platform actual constructor() {
    actual val platform: String = "Android \${android.os.Build.VERSION.SDK_INT}"
}

// iOS implementation
actual class Platform actual constructor() {
    actual val platform: String = UIDevice.currentDevice.systemName + " " + UIDevice.currentDevice.systemVersion
}

// Shared Nostr client
class NostrClient {
    suspend fun connect(relayUrl: String) {
        // Platform-agnostic connection logic
    }
    
    suspend fun publish(event: NostrEvent) {
        // Platform-agnostic publishing logic
    }
}`}</code></pre>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="py-16 bg-orange-600 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center">
    <h2 class="text-2xl font-display mb-6">Ready for More?</h2>
    <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      You've mastered Kotlin with Nostr. Here's what to explore next:
    </p>
    
    <div class="grid md:grid-cols-2 gap-6">
      {#each kotlinGuide.nextSteps as step}
        <a href={step.href} class="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
          <div class="flex justify-center mb-3">
            <svelte:component this={getIcon(step.icon)} class="h-8 w-8 text-white" />
          </div>
          <h3 class="font-semibold mb-2">{step.title}</h3>
          <p class="text-sm opacity-90">{step.description}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
