export const quickStartExamples = {
  javascript: [
    {
      title: "1. Install Requirements",
      description: "Use native WebSocket and Web Crypto API - no external dependencies needed",
      code: `// No installation required! 
// Uses native browser APIs:
// - WebSocket for relay connection
// - crypto.subtle for cryptographic operations
// - TextEncoder/TextDecoder for data conversion

console.log('Ready to use native web APIs!')`,
      language: 'JavaScript'
    },
    {
      title: "2. Generate Keypair", 
      description: "Create Nostr keypair using native crypto.subtle API",
      code: `// Generate random 32-byte private key
const privateKey = crypto.getRandomValues(new Uint8Array(32))

// Convert to hex string
const sk = Array.from(privateKey, b => b.toString(16).padStart(2, '0')).join('')

// Derive public key using secp256k1 (simplified example)
// In production, use a proper secp256k1 implementation
const pk = await derivePublicKey(sk)

console.log('Private key:', sk)
console.log('Public key:', pk)`,
      language: 'JavaScript'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection to wss://shu01.shugur.net",
      code: `// Native WebSocket connection
const ws = new WebSocket('wss://shu01.shugur.net')

ws.onopen = () => {
  console.log('Connected to Shugur relay!')
}

ws.onmessage = (event) => {
  const message = JSON.parse(event.data)
  console.log('Received:', message)
}

ws.onerror = (error) => {
  console.error('WebSocket error:', error)
}`,
      language: 'JavaScript'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message to subscribe to events and listen for responses",
      code: `// Subscribe to recent text notes
const subscription = [
  "REQ",
  "sub_" + Math.random().toString(16).slice(2), // Subscription ID
  {
    kinds: [1],    // Text notes
    limit: 10      // Last 10 events
  }
]

// Send subscription
ws.send(JSON.stringify(subscription))

// Listen for events
ws.onmessage = (event) => {
  const data = JSON.parse(event.data)
  if (data[0] === 'EVENT') {
    console.log('Received note:', data[2].content)
  }
}`,
      language: 'JavaScript'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish your first Nostr event",
      code: `// Create event
const event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr from native JavaScript!',
  pubkey: pk
}

// Calculate event ID (SHA256 of serialized event)
const eventData = JSON.stringify([0, event.pubkey, event.created_at, event.kind, event.tags, event.content])
const encoder = new TextEncoder()
const hash = await crypto.subtle.digest('SHA-256', encoder.encode(eventData))
event.id = Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, '0')).join('')

// Sign event (implement secp256k1 signing)
event.sig = await signEvent(event, sk)

// Publish event
ws.send(JSON.stringify(['EVENT', event]))
console.log('Published event!')`,
      language: 'JavaScript'
    }
  ],

  typescript: [
    {
      title: "1. Install Requirements",
      description: "Install native WebSocket support for Node.js - no third-party Nostr libraries",
      code: `// Install only native WebSocket for Node.js
npm install ws @types/ws

// For crypto operations, use Node.js built-in crypto module
// No external Nostr dependencies needed!`,
      language: 'Terminal'
    },
    {
      title: "2. Generate Keypair",
      description: "Create Nostr keypair using Node.js crypto module and secp256k1",
      code: `import crypto from 'crypto'
import { createECDH } from 'crypto'

// Generate 32-byte private key
const privateKey: Buffer = crypto.randomBytes(32)
const sk: string = privateKey.toString('hex')

// Derive public key using secp256k1
const ecdh = createECDH('secp256k1')
ecdh.setPrivateKey(privateKey)
const publicKey: Buffer = ecdh.getPublicKey()
const pk: string = publicKey.toString('hex').slice(2) // Remove 0x prefix

console.log('Private key:', sk)
console.log('Public key:', pk)`,
      language: 'TypeScript'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using native ws library",
      code: `import WebSocket from 'ws'

// Types for Nostr messages
type NostrEvent = {
  id: string
  pubkey: string
  created_at: number
  kind: number
  tags: string[][]
  content: string
  sig: string
}

// Connect to relay
const ws = new WebSocket('wss://shu01.shugur.net')

ws.on('open', () => {
  console.log('Connected to Shugur relay!')
})

ws.on('message', (data: Buffer) => {
  const message = JSON.parse(data.toString())
  console.log('Received:', message)
})

ws.on('error', (error: Error) => {
  console.error('WebSocket error:', error)
})`,
      language: 'TypeScript'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message with proper TypeScript typing",
      code: `// Subscription filter type
type Filter = {
  kinds?: number[]
  authors?: string[]
  since?: number
  until?: number
  limit?: number
  [key: string]: any
}

// Subscribe to recent text notes
const subscriptionId: string = 'sub_' + Math.random().toString(16).slice(2)
const filter: Filter = {
  kinds: [1],    // Text notes
  limit: 10      // Last 10 events
}

const subscription = ['REQ', subscriptionId, filter]
ws.send(JSON.stringify(subscription))

// Handle incoming messages
ws.on('message', (data: Buffer) => {
  const message: any[] = JSON.parse(data.toString())
  
  if (message[0] === 'EVENT') {
    const event: NostrEvent = message[2]
    console.log('Received note:', event.content)
  }
})`,
      language: 'TypeScript'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish event with proper type safety",
      code: `import crypto from 'crypto'

// Create event with proper typing
const event: Partial<NostrEvent> = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello Nostr from native TypeScript!',
  pubkey: pk
}

// Calculate event ID (SHA256 of serialized event)
const eventData = JSON.stringify([
  0, event.pubkey, event.created_at, 
  event.kind, event.tags, event.content
])

const hash = crypto.createHash('sha256').update(eventData).digest('hex')
event.id = hash

// Sign event with secp256k1 (implement proper signing)
const signature = crypto.sign('sha256', Buffer.from(event.id!, 'hex'), {
  key: privateKey,
  format: 'der',
  type: 'sec1'
})
event.sig = signature.toString('hex')

// Publish event
ws.send(JSON.stringify(['EVENT', event]))
console.log('Published event with ID:', event.id)`,
      language: 'TypeScript'
    }
  ],

  python: [
    {
      title: "1. Install Requirements",
      description: "Install only native Python libraries for WebSocket and cryptography",
      code: `# Install minimal native dependencies
pip install websockets cryptography

# Uses Python standard library:
# - json for message serialization
# - hashlib for SHA256 hashing
# - secrets for random number generation
# - asyncio for async WebSocket handling`,
      language: 'Terminal'
    },
    {
      title: "2. Generate Keypair",
      description: "Create Nostr keypair using Python's cryptography library",
      code: `import secrets
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import serialization

# Generate 32-byte private key
private_bytes = secrets.token_bytes(32)
sk = private_bytes.hex()

# Create secp256k1 private key object
private_key = ec.derive_private_key(
    int.from_bytes(private_bytes, 'big'), 
    ec.SECP256K1()
)

# Get public key
public_key = private_key.public_key()
public_bytes = public_key.public_numbers().x.to_bytes(32, 'big')
pk = public_bytes.hex()

print(f'Private key: {sk}')
print(f'Public key: {pk}')`,
      language: 'Python'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using native websockets library",
      code: `import asyncio
import websockets
import json

async def connect_to_relay():
    # Connect to Shugur relay
    uri = "wss://shu01.shugur.net"
    
    async with websockets.connect(uri) as websocket:
        print("Connected to Shugur relay!")
        
        # Keep connection alive and handle messages
        async for message in websocket:
            data = json.loads(message)
            print(f"Received: {data}")
            
    return websocket

# Run the connection
websocket = asyncio.run(connect_to_relay())`,
      language: 'Python'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message to subscribe to events and handle responses",
      code: `import json
import secrets

async def subscribe_and_listen(websocket):
    # Generate subscription ID
    sub_id = secrets.token_hex(8)
    
    # Create subscription filter
    subscription = [
        "REQ",
        sub_id,
        {
            "kinds": [1],    # Text notes
            "limit": 10      # Last 10 events
        }
    ]
    
    # Send subscription
    await websocket.send(json.dumps(subscription))
    
    # Listen for events
    async for message in websocket:
        data = json.loads(message)
        
        if data[0] == "EVENT" and data[1] == sub_id:
            event = data[2]
            print(f"Received note: {event['content']}")
        elif data[0] == "EOSE":
            print("End of stored events")
            break

# Usage
await subscribe_and_listen(websocket)`,
      language: 'Python'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish your first Nostr event",
      code: `import time
import json
import hashlib
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import ec

async def publish_event(websocket, private_key, pk):
    # Create event
    event = {
        "kind": 1,
        "created_at": int(time.time()),
        "tags": [],
        "content": "Hello Nostr from native Python!",
        "pubkey": pk
    }
    
    # Calculate event ID (SHA256 of serialized event)
    event_data = json.dumps([
        0, event["pubkey"], event["created_at"],
        event["kind"], event["tags"], event["content"]
    ], separators=(',', ':'), ensure_ascii=False)
    
    event_hash = hashlib.sha256(event_data.encode()).hexdigest()
    event["id"] = event_hash
    
    # Sign event with secp256k1
    signature = private_key.sign(
        event_hash.encode(),
        ec.ECDSA(hashes.SHA256())
    )
    event["sig"] = signature.hex()
    
    # Publish event
    await websocket.send(json.dumps(["EVENT", event]))
    print(f"Published event with ID: {event['id']}")

# Usage
await publish_event(websocket, private_key, pk)`,
      language: 'Python'
    }
  ],

  rust: [
    {
      title: "1. Install Requirements",
      description: "Add native WebSocket and crypto dependencies to Cargo.toml",
      code: `# Add to Cargo.toml
[dependencies]
tokio = { version = "1.0", features = ["full"] }
tokio-tungstenite = "0.20"
secp256k1 = { version = "0.28", features = ["rand", "serde"] }
sha2 = "0.10"
serde_json = "1.0"
rand = "0.8"
hex = "0.4"`,
      language: 'TOML'
    },
    {
      title: "2. Generate Keypair",
      description: "Generate secp256k1 keypair using native Rust crypto libraries",
      code: `use secp256k1::{Secp256k1, SecretKey, PublicKey};
use rand::rngs::OsRng;
use hex;

fn main() {
    // Generate secp256k1 context
    let secp = Secp256k1::new();
    
    // Generate random private key
    let (secret_key, public_key) = secp.generate_keypair(&mut OsRng);
    
    // Convert to hex strings
    let sk = hex::encode(secret_key.secret_bytes());
    let pk = hex::encode(public_key.serialize_uncompressed()[1..33].to_vec());
    
    println!("Private key: {}", sk);
    println!("Public key: {}", pk);
}`,
      language: 'Rust'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using tokio-tungstenite",
      code: `use tokio_tungstenite::{connect_async, WebSocketStream};
use tokio_tungstenite::tungstenite::Message;
use tokio::net::TcpStream;
use url::Url;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Connect to Shugur relay
    let url = Url::parse("wss://shu01.shugur.net")?;
    let (ws_stream, _) = connect_async(url).await?;
    
    println!("Connected to Shugur relay!");
    
    // Split stream for reading and writing
    let (mut write, mut read) = ws_stream.split();
    
    // Handle incoming messages
    while let Some(msg) = read.next().await {
        match msg? {
            Message::Text(text) => {
                println!("Received: {}", text);
            }
            _ => {}
        }
    }
    
    Ok(())
}`,
      language: 'Rust'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message and handle incoming Nostr events",
      code: `use serde_json::{json, Value};
use rand::{thread_rng, Rng};

async fn subscribe_and_listen(write: &mut SplitSink<WebSocketStream<MaybeTlsStream<TcpStream>>, Message>) {
    // Generate subscription ID
    let sub_id: String = thread_rng()
        .sample_iter(&rand::distributions::Alphanumeric)
        .take(8)
        .map(char::from)
        .collect();
    
    // Create subscription
    let subscription = json!([
        "REQ",
        sub_id,
        {
            "kinds": [1],
            "limit": 10
        }
    ]);
    
    // Send subscription
    write.send(Message::Text(subscription.to_string())).await?;
    
    println!("Subscribed with ID: {}", sub_id);
}

// Handle messages in main loop
// if message[0] == "EVENT" {
//     println!("Received note: {}", event["content"]);
// }`,
      language: 'Rust'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish Nostr event using native cryptography",
      code: `use sha2::{Sha256, Digest};
use secp256k1::{Message as SecpMessage, Secp256k1};
use std::time::{SystemTime, UNIX_EPOCH};

async fn publish_event(
    write: &mut SplitSink<WebSocketStream<MaybeTlsStream<TcpStream>>, Message>,
    secret_key: &SecretKey,
    public_key: &PublicKey
) -> Result<(), Box<dyn std::error::Error>> {
    // Create event
    let now = SystemTime::now().duration_since(UNIX_EPOCH)?.as_secs();
    let pk_hex = hex::encode(public_key.serialize_uncompressed()[1..33].to_vec());
    
    // Calculate event ID
    let event_string = format!(
        "[0,\"{}\",{},{},{},\"{}\"]",
        pk_hex, now, 1, "[]", "Hello Nostr from native Rust!"
    );
    
    let mut hasher = Sha256::new();
    hasher.update(event_string.as_bytes());
    let event_id = hex::encode(hasher.finalize());
    
    // Sign event
    let secp = Secp256k1::new();
    let message = SecpMessage::from_slice(&hex::decode(&event_id)?)?;
    let signature = secp.sign_ecdsa(&message, secret_key);
    
    // Create final event
    let signed_event = json!({
        "id": event_id,
        "pubkey": pk_hex,
        "created_at": now,
        "kind": 1,
        "tags": [],
        "content": "Hello Nostr from native Rust!",
        "sig": hex::encode(signature.serialize_compact())
    });
    
    // Publish
    let publish_msg = json!(["EVENT", signed_event]);
    write.send(Message::Text(publish_msg.to_string())).await?;
    
    println!("Published event with ID: {}", event_id);
    Ok(())
}`,
      language: 'Rust'
    }
  ],

  go: [
    {
      title: "1. Install Requirements",
      description: "Use native Go libraries for WebSocket and cryptography",
      code: `# Initialize Go module
go mod init nostr-app

# Add native dependencies
go get github.com/gorilla/websocket
go get github.com/btcsuite/btcd/btcec/v2
go get github.com/btcsuite/btcd/chaincfg/chainhash`,
      language: 'Terminal'
    },
    {
      title: "2. Generate Keypair",
      description: "Generate secp256k1 keypair using btcec library",
      code: `package main

import (
    "crypto/rand"
    "encoding/hex"
    "fmt"
    "github.com/btcsuite/btcd/btcec/v2"
)

func main() {
    // Generate private key
    privateKey, err := btcec.NewPrivateKey()
    if err != nil {
        panic(err)
    }
    
    // Get public key
    publicKey := privateKey.PubKey()
    
    // Convert to hex strings
    sk := hex.EncodeToString(privateKey.Serialize())
    pk := hex.EncodeToString(publicKey.SerializeCompressed()[1:])
    
    fmt.Printf("Private key: %s\\n", sk)
    fmt.Printf("Public key: %s\\n", pk)
}`,
      language: 'Go'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using gorilla/websocket",
      code: `package main

import (
    "log"
    "net/url"
    "github.com/gorilla/websocket"
)

func main() {
    // Connect to Shugur relay
    u := url.URL{Scheme: "wss", Host: "shu01.shugur.net", Path: "/"}
    
    conn, _, err := websocket.DefaultDialer.Dial(u.String(), nil)
    if err != nil {
        log.Fatal("dial:", err)
    }
    defer conn.Close()
    
    fmt.Println("Connected to Shugur relay!")
    
    // Read messages
    for {
        _, message, err := conn.ReadMessage()
        if err != nil {
            log.Println("read:", err)
            return
        }
        fmt.Printf("Received: %s\\n", message)
    }
}`,
      language: 'Go'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message and handle Nostr events",
      code: `import (
    "encoding/json"
    "math/rand"
    "time"
)

type Filter struct {
    Kinds []int \`json:"kinds,omitempty"\`
    Limit int   \`json:"limit,omitempty"\`
}

func subscribeAndListen(conn *websocket.Conn) {
    // Generate subscription ID
    rand.Seed(time.Now().UnixNano())
    subID := fmt.Sprintf("sub_%d", rand.Intn(100000))
    
    // Create subscription
    subscription := []interface{}{
        "REQ",
        subID,
        Filter{
            Kinds: []int{1},
            Limit: 10,
        },
    }
    
    // Send subscription
    err := conn.WriteJSON(subscription)
    if err != nil {
        log.Println("write:", err)
        return
    }
    
    fmt.Printf("Subscribed with ID: %s\\n", subID)
    
    // Listen for events
    for {
        var message []interface{}
        err := conn.ReadJSON(&message)
        if err != nil {
            log.Println("read:", err)
            return
        }
        
        if len(message) >= 3 && message[0] == "EVENT" {
            event := message[2].(map[string]interface{})
            fmt.Printf("Received note: %s\\n", event["content"])
        }
    }
}`,
      language: 'Go'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish Nostr event using native crypto",
      code: `package main

import (
    "crypto/sha256"
    "encoding/hex"
    "encoding/json"
    "fmt"
    "time"
    "github.com/btcsuite/btcd/btcec/v2"
    "github.com/btcsuite/btcd/btcec/v2/ecdsa"
)

type Event struct {
    ID        string     \`json:"id"\`
    PubKey    string     \`json:"pubkey"\`
    CreatedAt int64      \`json:"created_at"\`
    Kind      int        \`json:"kind"\`
    Tags      [][]string \`json:"tags"\`
    Content   string     \`json:"content"\`
    Sig       string     \`json:"sig"\`
}

func publishEvent(conn *websocket.Conn, privateKey *btcec.PrivateKey, pk string) {
    // Create event
    event := Event{
        PubKey:    pk,
        CreatedAt: time.Now().Unix(),
        Kind:      1,
        Tags:      [][]string{},
        Content:   "Hello Nostr from native Go!",
    }
    
    // Calculate event ID
    eventData := fmt.Sprintf(
        "[0,\"%s\",%d,%d,%s,\"%s\"]",
        event.PubKey, event.CreatedAt, event.Kind, "[]", event.Content,
    )
    
    hash := sha256.Sum256([]byte(eventData))
    event.ID = hex.EncodeToString(hash[:])
    
    // Sign event
    hashBytes, _ := hex.DecodeString(event.ID)
    signature := ecdsa.Sign(privateKey, hashBytes)
    event.Sig = hex.EncodeToString(signature.Serialize())
    
    // Publish event
    publishMsg := []interface{}{"EVENT", event}
    err := conn.WriteJSON(publishMsg)
    if err != nil {
        log.Println("publish:", err)
        return
    }
    
    fmt.Printf("Published event with ID: %s\\n", event.ID)
}`,
      language: 'Go'
    }
  ],

  swift: [
    {
      title: "1. Install Requirements",
      description: "Add native Swift dependencies for WebSocket and crypto operations",
      code: `// Package.swift
dependencies: [
    .package(url: "https://github.com/apple/swift-crypto", from: "3.0.0"),
    .package(url: "https://github.com/daltoniam/Starscream", from: "4.0.0")
]

// Or for iOS app, add in Xcode:
// - CryptoKit (built-in)
// - Starscream via Swift Package Manager`,
      language: 'Swift'
    },
    {
      title: "2. Generate Keypair",
      description: "Generate secp256k1 keypair using CryptoKit and Security framework",
      code: `import Foundation
import CryptoKit
import Security

func generateNostrKeypair() -> (privateKey: String, publicKey: String)? {
    // Generate 32 random bytes for private key
    let privateKeyData = Data((0..<32).map { _ in UInt8.random(in: 0...255) })
    let privateKeyHex = privateKeyData.map { String(format: "%02x", $0) }.joined()
    
    // For production, implement proper secp256k1 key derivation
    // This is a simplified example
    let publicKeyHex = derivePublicKey(from: privateKeyHex)
    
    return (privateKey: privateKeyHex, publicKey: publicKeyHex)
}

// Usage
if let keypair = generateNostrKeypair() {
    print("Private key: \\(keypair.privateKey)")
    print("Public key: \\(keypair.publicKey)")
}`,
      language: 'Swift'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using Starscream",
      code: `import Starscream
import Foundation

class NostrClient: WebSocketDelegate {
    var socket: WebSocket!
    
    func connect() {
        var request = URLRequest(url: URL(string: "wss://shu01.shugur.net")!)
        request.timeoutInterval = 5
        socket = WebSocket(request: request)
        socket.delegate = self
        socket.connect()
    }
    
    func didReceive(event: WebSocketEvent, client: WebSocket) {
        switch event {
        case .connected(let headers):
            print("Connected to Shugur relay!")
        case .text(let string):
            print("Received: \\(string)")
            handleMessage(string)
        case .disconnected(let reason, let code):
            print("Disconnected: \\(reason) with code: \\(code)")
        case .error(let error):
            print("Error: \\(error?.localizedDescription ?? "Unknown error")")
        default:
            break
        }
    }
    
    func handleMessage(_ message: String) {
        // Parse JSON message
        guard let data = message.data(using: .utf8),
              let json = try? JSONSerialization.jsonObject(with: data) as? [Any] else {
            return
        }
        
        if let type = json.first as? String, type == "EVENT" {
            print("Received Nostr event")
        }
    }
}`,
      language: 'Swift'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message and handle incoming Nostr events",
      code: `import Foundation

extension NostrClient {
    func subscribeToEvents() {
        // Generate subscription ID
        let subId = "sub_\\(UUID().uuidString.prefix(8))"
        
        // Create subscription filter
        let subscription: [Any] = [
            "REQ",
            subId,
            [
                "kinds": [1],
                "limit": 10
            ]
        ]
        
        // Send subscription
        do {
            let jsonData = try JSONSerialization.data(withJSONObject: subscription)
            let jsonString = String(data: jsonData, encoding: .utf8)!
            socket.write(string: jsonString)
            print("Subscribed with ID: \\(subId)")
        } catch {
            print("Failed to send subscription: \\(error)")
        }
    }
    
    func handleNostrEvent(_ event: [String: Any]) {
        if let content = event["content"] as? String {
            print("Received note: \\(content)")
        }
    }
}

// Usage
let client = NostrClient()
client.connect()
// Call subscribeToEvents() after connection is established`,
      language: 'Swift'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish your first Nostr event",
      code: `import Foundation
import CryptoKit

extension NostrClient {
    func publishEvent(content: String, privateKey: String, publicKey: String) {
        // Create event
        let now = Int(Date().timeIntervalSince1970)
        let event: [String: Any] = [
            "kind": 1,
            "created_at": now,
            "tags": [],
            "content": content,
            "pubkey": publicKey
        ]
        
        // Calculate event ID
        let eventArray = [0, publicKey, now, 1, [], content] as [Any]
        do {
            let eventData = try JSONSerialization.data(withJSONObject: eventArray)
            let hash = SHA256.hash(data: eventData)
            let eventId = hash.compactMap { String(format: "%02x", $0) }.joined()
            
            // Create signed event (implement proper secp256k1 signing)
            var signedEvent = event
            signedEvent["id"] = eventId
            signedEvent["sig"] = signEventWithSecp256k1(eventId, privateKey)
            
            // Publish event
            let publishMessage = ["EVENT", signedEvent]
            let jsonData = try JSONSerialization.data(withJSONObject: publishMessage)
            let jsonString = String(data: jsonData, encoding: .utf8)!
            
            socket.write(string: jsonString)
            print("Published event with ID: \\(eventId)")
            
        } catch {
            print("Failed to publish event: \\(error)")
        }
    }
}

// Usage
client.publishEvent(
    content: "Hello Nostr from native Swift!",
    privateKey: keypair.privateKey,
    publicKey: keypair.publicKey
)`,
      language: 'Swift'
    }
  ],

  kotlin: [
    {
      title: "1. Install Requirements",
      description: "Add native Kotlin/Android dependencies for WebSocket and crypto",
      code: `// build.gradle.kts (Module: app)
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    implementation("org.bouncycastle:bcprov-jdk15on:1.70")
    implementation("com.google.code.gson:gson:2.10.1")
}

// AndroidManifest.xml
<uses-permission android:name="android.permission.INTERNET" />`,
      language: 'Kotlin'
    },
    {
      title: "2. Generate Keypair",
      description: "Generate secp256k1 keypair using BouncyCastle",
      code: `import org.bouncycastle.jce.provider.BouncyCastleProvider
import org.bouncycastle.jce.spec.ECNamedCurveGenParameterSpec
import java.security.*
import java.security.spec.ECGenParameterSpec

fun generateNostrKeypair(): Pair<String, String> {
    // Add BouncyCastle provider
    Security.addProvider(BouncyCastleProvider())
    
    // Generate secp256k1 keypair
    val keyPairGenerator = KeyPairGenerator.getInstance("EC", "BC")
    val ecGenParameterSpec = ECNamedCurveGenParameterSpec("secp256k1")
    keyPairGenerator.initialize(ecGenParameterSpec, SecureRandom())
    
    val keyPair = keyPairGenerator.generateKeyPair()
    val privateKey = keyPair.private.encoded
    val publicKey = keyPair.public.encoded
    
    // Convert to hex strings
    val sk = privateKey.joinToString("") { "%02x".format(it) }
    val pk = publicKey.drop(26).take(32).joinToString("") { "%02x".format(it) }
    
    return Pair(sk, pk)
}

// Usage
val (privateKey, publicKey) = generateNostrKeypair()
println("Private key: $privateKey")
println("Public key: $publicKey")`,
      language: 'Kotlin'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using OkHttp",
      code: `import okhttp3.*
import kotlinx.coroutines.*

class NostrClient {
    private lateinit var webSocket: WebSocket
    private val client = OkHttpClient()
    
    fun connect() {
        val request = Request.Builder()
            .url("wss://shu01.shugur.net")
            .build()
            
        webSocket = client.newWebSocket(request, object : WebSocketListener() {
            override fun onOpen(webSocket: WebSocket, response: Response) {
                println("Connected to Shugur relay!")
            }
            
            override fun onMessage(webSocket: WebSocket, text: String) {
                println("Received: $text")
                handleMessage(text)
            }
            
            override fun onFailure(webSocket: WebSocket, t: Throwable, response: Response?) {
                println("WebSocket error: \${t.message}")
            }
            
            override fun onClosed(webSocket: WebSocket, code: Int, reason: String) {
                println("Connection closed: $reason")
            }
        })
    }
    
    private fun handleMessage(message: String) {
        // Parse and handle Nostr messages
        try {
            // Parse JSON and handle events
        } catch (e: Exception) {
            println("Error parsing message: \${e.message}")
        }
    }
}`,
      language: 'Kotlin'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message and handle incoming Nostr events",
      code: `import com.google.gson.Gson
import java.util.*

data class NostrFilter(
    val kinds: List<Int>? = null,
    val limit: Int? = null
)

fun NostrClient.subscribeToEvents() {
    // Generate subscription ID
    val subId = "sub_\${UUID.randomUUID().toString().take(8)}"
    
    // Create subscription
    val filter = NostrFilter(kinds = listOf(1), limit = 10)
    val subscription = listOf("REQ", subId, filter)
    
    // Send subscription
    val gson = Gson()
    val jsonMessage = gson.toJson(subscription)
    webSocket.send(jsonMessage)
    
    println("Subscribed with ID: $subId")
}

fun NostrClient.handleNostrEvent(eventJson: String) {
    try {
        val gson = Gson()
        val messageArray = gson.fromJson(eventJson, Array::class.java)
        
        if (messageArray.size > 2 && messageArray[0] == "EVENT") {
            val event = messageArray[2] as Map<String, Any>
            val content = event["content"] as? String
            println("Received note: $content")
        }
    } catch (e: Exception) {
        println("Error handling event: \${e.message}")
    }
}

// Usage
val client = NostrClient()
client.connect()
// Call subscribeToEvents() after connection`,
      language: 'Kotlin'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish Nostr event",
      code: `import java.security.MessageDigest
import java.security.Signature
import java.time.Instant

data class NostrEvent(
    val kind: Int,
    val created_at: Long,
    val tags: List<List<String>>,
    val content: String,
    val pubkey: String,
    var id: String? = null,
    var sig: String? = null
)

fun NostrClient.publishEvent(content: String, privateKey: String, publicKey: String) {
    // Create event
    val event = NostrEvent(
        kind = 1,
        created_at = Instant.now().epochSecond,
        tags = emptyList(),
        content = content,
        pubkey = publicKey
    )
    
    try {
        // Calculate event ID
        val eventArray = listOf(
            0, event.pubkey, event.created_at,
            event.kind, event.tags, event.content
        )
        val gson = Gson()
        val eventString = gson.toJson(eventArray)
        
        val digest = MessageDigest.getInstance("SHA-256")
        val hash = digest.digest(eventString.toByteArray())
        val eventId = hash.joinToString("") { "%02x".format(it) }
        event.id = eventId
        
        // Sign event (implement proper secp256k1 signing)
        event.sig = signEvent(eventId, privateKey)
        
        // Publish
        val publishMessage = listOf("EVENT", event)
        val jsonMessage = gson.toJson(publishMessage)
        webSocket.send(jsonMessage)
        
        println("Published event with ID: $eventId")
        
    } catch (e: Exception) {
        println("Failed to publish event: \${e.message}")
    }
}

// Usage
client.publishEvent(
    "Hello Nostr from native Kotlin!",
    privateKey,
    publicKey
)`,
      language: 'Kotlin'
    }
  ],

  flutter: [
    {
      title: "1. Install Requirements",
      description: "Add native Dart packages for WebSocket and cryptography",
      code: `# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  web_socket_channel: ^2.4.0
  crypto: ^3.0.3
  pointycastle: ^3.7.3  # For secp256k1
  convert: ^3.1.1

# Install dependencies
flutter pub get`,
      language: 'YAML'
    },
    {
      title: "2. Generate Keypair",
      description: "Generate secp256k1 keypair using PointyCastle",
      code: `import 'dart:math';
import 'dart:typed_data';
import 'package:pointycastle/export.dart';
import 'package:convert/convert.dart';

class NostrKeypair {
  static Map<String, String> generate() {
    // Generate random private key
    final secureRandom = SecureRandom('Fortuna')
      ..seed(KeyParameter(Uint8List.fromList(
        List.generate(32, (i) => Random.secure().nextInt(256))
      )));
    
    // Create secp256k1 domain parameters
    final domainParams = ECDomainParameters('secp256k1');
    
    // Generate key pair
    final keyGen = ECKeyGenerator()
      ..init(ParametersWithRandom(ECKeyGeneratorParameters(domainParams), secureRandom));
    
    final keyPair = keyGen.generateKeyPair();
    final privateKey = keyPair.privateKey as ECPrivateKey;
    final publicKey = keyPair.publicKey as ECPublicKey;
    
    // Convert to hex strings
    final sk = hex.encode(privateKey.d!.toByteArray());
    final pk = hex.encode(publicKey.Q!.getEncoded(false).sublist(1, 33));
    
    return {
      'privateKey': sk,
      'publicKey': pk,
    };
  }
}

// Usage
final keypair = NostrKeypair.generate();
print('Private key: \${keypair['privateKey']}');
print('Public key: \${keypair['publicKey']}');`,
      language: 'Dart'
    },
    {
      title: "3. Connect to Relay",
      description: "Establish WebSocket connection using web_socket_channel",
      code: `import 'package:web_socket_channel/web_socket_channel.dart';
import 'dart:convert';

class NostrClient {
  late WebSocketChannel _channel;
  
  Future<void> connect() async {
    try {
      _channel = WebSocketChannel.connect(
        Uri.parse('wss://shu01.shugur.net')
      );
      
      await _channel.ready;
      print('Connected to Shugur relay!');
      
      // Listen for messages
      _channel.stream.listen(
        (message) {
          print('Received: $message');
          _handleMessage(message);
        },
        onError: (error) {
          print('WebSocket error: $error');
        },
        onDone: () {
          print('Connection closed');
        },
      );
      
    } catch (e) {
      print('Failed to connect: $e');
    }
  }
  
  void _handleMessage(dynamic message) {
    try {
      final data = jsonDecode(message);
      if (data is List && data.isNotEmpty) {
        switch (data[0]) {
          case 'EVENT':
            _handleEvent(data);
            break;
          case 'EOSE':
            print('End of stored events');
            break;
        }
      }
    } catch (e) {
      print('Error parsing message: $e');
    }
  }
  
  void _handleEvent(List<dynamic> eventMessage) {
    if (eventMessage.length > 2) {
      final event = eventMessage[2] as Map<String, dynamic>;
      print('Received note: \${event['content']}');
    }
  }
}`,
      language: 'Dart'
    },
    {
      title: "4. Subscribe & Listen",
      description: "Send REQ message and handle incoming Nostr events",
      code: `import 'dart:convert';
import 'dart:math';

extension NostrSubscription on NostrClient {
  void subscribeToEvents() {
    // Generate subscription ID
    final subId = 'sub_\${Random().nextInt(1000000)}';
    
    // Create subscription filter
    final subscription = [
      'REQ',
      subId,
      {
        'kinds': [1],
        'limit': 10,
      }
    ];
    
    // Send subscription
    final message = jsonEncode(subscription);
    _channel.sink.add(message);
    
    print('Subscribed with ID: $subId');
  }
  
  void closeSubscription(String subId) {
    final closeMessage = ['CLOSE', subId];
    _channel.sink.add(jsonEncode(closeMessage));
  }
}

// Usage
final client = NostrClient();
await client.connect();
client.subscribeToEvents();`,
      language: 'Dart'
    },
    {
      title: "5. Publish Event",
      description: "Create, sign, and publish your first Nostr event",
      code: `import 'dart:convert';
import 'package:crypto/crypto.dart';
import 'package:pointycastle/export.dart';

extension NostrPublish on NostrClient {
  Future<void> publishEvent({
    required String content,
    required String privateKey,
    required String publicKey,
  }) async {
    try {
      // Create event
      final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
      final event = {
        'kind': 1,
        'created_at': now,
        'tags': <List<String>>[],
        'content': content,
        'pubkey': publicKey,
      };
      
      // Calculate event ID
      final eventArray = [
        0, event['pubkey'], event['created_at'],
        event['kind'], event['tags'], event['content']
      ];
      final eventString = jsonEncode(eventArray);
      final eventBytes = utf8.encode(eventString);
      final hash = sha256.convert(eventBytes);
      final eventId = hash.toString();
      
      event['id'] = eventId;
      
      // Sign event (implement proper secp256k1 signing)
      final signature = await _signEvent(eventId, privateKey);
      event['sig'] = signature;
      
      // Publish event
      final publishMessage = ['EVENT', event];
      _channel.sink.add(jsonEncode(publishMessage));
      
      print('Published event with ID: $eventId');
      
    } catch (e) {
      print('Failed to publish event: $e');
    }
  }
  
  Future<String> _signEvent(String eventId, String privateKey) async {
    // Implement secp256k1 signing with PointyCastle
    // This is a placeholder - implement proper signing
    return 'signature_placeholder';
  }
}

// Usage
await client.publishEvent(
  content: 'Hello Nostr from native Flutter!',
  privateKey: keypair['privateKey']!,
  publicKey: keypair['publicKey']!,
);`,
      language: 'Dart'
    }
  ]
};